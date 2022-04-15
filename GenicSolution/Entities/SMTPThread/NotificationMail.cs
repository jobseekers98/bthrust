using GenicSolution.Entities.Helper;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace GenicSolution.Entities.SMTPThread
{
    public class NotificationMail
    {
        private static EntityFrameworkDbContext _context;
        [Obsolete]
        private static IHostingEnvironment _hostingEnvironment;
        public static string getCommonPath = "";
        public static string _name = "";
        [Obsolete]

        public NotificationMail(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        #region Begin Common resion
        private void SmtpSendMail(string subject, string body, string mailto, int senderid)
        {
            var genicProfile = _context.GenicProfile.FirstOrDefault();
            var credentials = _context.SMTPSettings.Where(e => e.Id == senderid).FirstOrDefault();
            if (credentials == null)
            {
                credentials = _context.SMTPSettings.FirstOrDefault();
            }
            MailMessage mail = new MailMessage();
            mail.To.Add(new MailAddress(mailto));
            mail.Subject = subject;
            mail.Body = body;
            mail.From = new MailAddress(credentials.SMTPUsername, genicProfile.Name);
            SmtpClient client = new SmtpClient(credentials.SMTPHost, credentials.SMTPPort);
            mail.IsBodyHtml = true;
            mail.BodyEncoding = UTF8Encoding.UTF8;
            client.Port = credentials.SMTPPort;
            client.EnableSsl = true;
            client.UseDefaultCredentials = true;
            client.Credentials = new NetworkCredential(credentials.SMTPEmail, credentials.SMTPPassword);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            try
            {
                if (getCommonPath.Length > 0)
                {
                    var webClient = new WebClient();
                    byte[] imgdata = webClient.DownloadData(getCommonPath);
                    MemoryStream strm = new MemoryStream(imgdata);
                    Attachment data = new Attachment(strm, _name);
                    ContentDisposition disposition = data.ContentDisposition;
                    data.ContentId = _name;
                    data.ContentDisposition.Inline = true;
                    mail.Attachments.Add(data);
                }
            }
            catch { }
            try
            {
                if (mailto.Length > 0)
                {
                    client.Send(mail);
                }
                getCommonPath = "";
                _name = "";
            }
            catch (Exception ex)
            {
                getCommonPath = "";
                _name = "";
            }
            getCommonPath = "";
            _name = "";
        }
        private void SmtpSendMailWithCalendar(string subject, string body, string mailto, string mailtoName, string appStart, string appEnd, string address, Guid tId, int senderid)
        {
            var genicProfile = _context.GenicProfile.FirstOrDefault();
            var credentials = _context.SMTPSettings.Where(e => e.Id == senderid).FirstOrDefault();
            if (credentials == null)
            {
                credentials = _context.SMTPSettings.FirstOrDefault();
            }
            MailMessage mail = new MailMessage();
            mail.To.Add(new MailAddress(mailto));
            mail.Subject = subject;
            mail.Body = body;
            mail.From = new MailAddress(credentials.SMTPUsername, genicProfile.Name);
            SmtpClient client = new SmtpClient(credentials.SMTPHost, credentials.SMTPPort); 
            mail.IsBodyHtml = true;
            mail.BodyEncoding = UTF8Encoding.UTF8;

            StringBuilder str = new StringBuilder();
            str.AppendLine("BEGIN:VCALENDAR");
            str.AppendLine("PRODID:-//Schedule a Meeting");
            str.AppendLine("VERSION:2.0");
            str.AppendLine("METHOD:REQUEST");
            str.AppendLine("BEGIN:VEVENT");
            str.AppendLine(string.Format("DTSTART:{0:yyyyMMddTHHmmssZ}", Convert.ToDateTime(appStart).AddMinutes(-480).ToUniversalTime()));
            str.AppendLine(string.Format("DTSTAMP:{0:yyyyMMddTHHmmssZ}", DateTime.UtcNow));
            str.AppendLine(string.Format("DTEND:{0:yyyyMMddTHHmmssZ}", Convert.ToDateTime(appEnd).AddMinutes(-480).ToUniversalTime()));
            str.AppendLine("LOCATION: " + address);
            str.AppendLine(string.Format("UID:{0}", tId));
            str.AppendLine(string.Format("DESCRIPTION:{0}", body));
            str.AppendLine(string.Format("X-ALT-DESC;FMTTYPE=text/html:{0}", body));
            str.AppendLine(string.Format("SUMMARY:{0}", subject));
            str.AppendLine(string.Format("ORGANIZER:MAILTO:{0}", credentials.SMTPUsername));
            str.AppendLine(string.Format("ATTENDEE;CN=\"{0}\";RSVP=TRUE:mailto:{1}", mailtoName, mailto));
            str.AppendLine("BEGIN:VALARM");
            str.AppendLine("TRIGGER:-PT15M");
            str.AppendLine("ACTION:DISPLAY");
            str.AppendLine("DESCRIPTION:Reminder");
            str.AppendLine("END:VALARM");
            str.AppendLine("END:VEVENT");
            str.AppendLine("END:VCALENDAR");

            var htmlContentType = new System.Net.Mime.ContentType(System.Net.Mime.MediaTypeNames.Text.Html);
            var avHtmlBody = AlternateView.CreateAlternateViewFromString(body, htmlContentType);
            mail.AlternateViews.Add(avHtmlBody);
            System.Net.Mime.ContentType contype = new System.Net.Mime.ContentType("text/calendar");
            contype.Parameters.Add("method", "REQUEST");
            contype.Parameters.Add("name", "Meeting.ics");
            AlternateView avCal = AlternateView.CreateAlternateViewFromString(str.ToString(), contype);
            mail.AlternateViews.Add(avCal);
            client.Port = credentials.SMTPPort;
            client.EnableSsl = true;
            client.UseDefaultCredentials = true;
            client.Credentials = new NetworkCredential(credentials.SMTPEmail, credentials.SMTPPassword);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            try
            {
                if (mailto.Length > 0)
                {
                    client.Send(mail);
                }
                getCommonPath = "";
                _name = "";
            }
            catch (Exception ex)
            {
                getCommonPath = "";
                _name = "";
            }
            getCommonPath = "";
            _name = "";
        }
        #endregion Common resion

        #region Begin Quote
        [Obsolete]
        public void emailQuoteByClient(Quote obj, string emailText)
        {
            try
            {
                var quoteResult = (from q in _context.Quote where q.Id == obj.Id select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Quotation" select t).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                string filePath = GlobalParameters.QuotePath(quoteResult.QuoteId);
                var tempCustMailBody = string.Empty;
                tempCustMailBody = templateResult.CustomerMailBody.Replace("CUSTOMER_NAME", quoteResult.CustomerName)
                    .Replace("QUOTATION_SUBJECT", quoteResult.JobTitle)
                    .Replace("COMPANY_EMAIL", genicProfile.Email)
                    .Replace("COMPANY_NAME", genicProfile.Name)
                    .Replace("CUSTOMER_COMPANY", quoteResult.CompanyName)
                    .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                getCommonPath = filePath;
                _name = quoteResult.QuoteId + ".pdf";
                GenerateQuotPDF(obj.Id);
                Task.Delay(5000);
                SmtpSendMail("Quote from " + genicProfile.Name + "", tempCustMailBody, emailText, quoteResult.SMTPId);
            }
            catch (Exception ex) { }
        }

        [Obsolete]
        public void sentQuoteLinkForSignature(Quote obj, string emailText)
        {
            try
            {
                var credentials = _context.SMTPSettings.Where(s => s.Id == obj.SMTPId).FirstOrDefault();
                var login = _context.Login.Where(s => s.Id == obj.CustomerId).FirstOrDefault();
                var genicProfile = _context.GenicProfile.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + obj.CustomerName + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Quotation this to request you please make digital signature.</td></tr>");
                sb.Append("<tr><td colspan='3'>Your digital signature link below.</td></tr>");
                sb.Append("<tr><td>Signature Link </td><td>:</td><td><a target='_blank' href='" + GlobalParameters.FSM_LINK_FOR_SIGN + "?i=" + obj.Id + "&t=" + login.Token + "'>Click here</a></td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>If you have any questions or concerns regarding this, please don't.</td></tr>");
                sb.Append("<tr><td colspan='3'>hesitate to get in touch with us at " + credentials.SMTPEmail + ".</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Sincerely</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>" + genicProfile.Name + "</td></tr>");
                sb.Append("</table>");
                SmtpSendMail("Signature for Quotation", sb.ToString(), emailText, obj.SMTPId);
            }
            catch (Exception ex) { }
        }

        [Obsolete]
        public void createQuoteBodyTemplate(Guid? QuoteId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                Task.Yield();
                var quoteResult = (from q in _context.Quote where q.Id == QuoteId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Quotation" select t).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (quoteResult != null && templateResult != null)
                {
                    //Generate PDF and Attache with email
                    GenerateQuotPDF(quoteResult.Id);
                    Task.Delay(3000);
                    if (isCust)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody.Replace("CUSTOMER_NAME", quoteResult.CustomerName)
                                .Replace("QUOTATION_SUBJECT", quoteResult.JobTitle)
                                .Replace("COMPANY_EMAIL", genicProfile.Email)
                                .Replace("COMPANY_NAME", genicProfile.Name)
                                .Replace("CUSTOMER_COMPANY", quoteResult.CompanyName);
                            SmtpSendMail(quoteResult.QuoteId + " Quotation from " + genicProfile.Name + "", tempCustMailBody, quoteResult.CustomerEmail, quoteResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    if (isAdmin)
                    {
                        var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                        try
                        {
                            var tempAdminMailBody = string.Empty;
                            tempAdminMailBody = templateResult.AdminMailBody.Replace("USER_NAME", adminResult.FullName)
                                .Replace("QUOTATION_SUBJECT", quoteResult.JobTitle)
                                .Replace("QUOTATION_NETAMOUNT", quoteResult.NetAmount.ToString("00.00"));
                            SmtpSendMail(quoteResult.QuoteId + " Quotation for " + quoteResult.CompanyName + "", tempAdminMailBody, adminResult.Email, quoteResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }

        [Obsolete]
        public void updateQuoteBodyTemplate(Guid? QuoteId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                Task.Yield();
                var quoteResult = (from q in _context.Quote where q.Id == QuoteId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Quotation Edit" select t).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (quoteResult != null && templateResult != null)
                {
                    //Generate PDF and Attache with email
                    GenerateQuotPDF(quoteResult.Id);
                    Task.Delay(3000);
                    if (isCust)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody.Replace("CUSTOMER_NAME", quoteResult.CustomerName)
                                .Replace("QUOTATION_SUBJECT", quoteResult.JobTitle)
                                .Replace("COMPANY_EMAIL", genicProfile.Email)
                                .Replace("COMPANY_NAME", genicProfile.Name)
                                .Replace("CUSTOMER_COMPANY", quoteResult.CompanyName);
                            SmtpSendMail(quoteResult.QuoteId + " Quotation from " + genicProfile.Name + "", tempCustMailBody, quoteResult.CustomerEmail, quoteResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    if (isAdmin)
                    {
                        var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                        try
                        {
                            var tempAdminMailBody = string.Empty;
                            tempAdminMailBody = templateResult.AdminMailBody.Replace("USER_NAME", adminResult.FullName)
                                .Replace("QUOTATION_SUBJECT", quoteResult.JobTitle)
                                .Replace("QUOTATION_NETAMOUNT", quoteResult.NetAmount.ToString("00.00"));
                            SmtpSendMail(quoteResult.QuoteId + " Quotation for " + quoteResult.CompanyName + "", tempAdminMailBody, adminResult.Email, quoteResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }

        [Obsolete]
        public void GenerateQuotPDF(Guid QuoteId)
        {
            try
            {
                var obj = (from q in _context.Quote where q.Id == QuoteId select q).FirstOrDefault();
                var QuoteItemList = (from i in _context.QuoteItem where i.QuoteId == obj.Id select i).ToList();
                var getUserDetails = (from u in _context.Login where u.Id == obj.CreatedBy select u).FirstOrDefault();
                string IsDirExist = Path.Combine(_hostingEnvironment.ContentRootPath, GlobalParameters.AWS_DRIVE);
                if (!Directory.Exists(IsDirExist))
                {
                    Directory.CreateDirectory(IsDirExist);
                }
                string filePath = Path.Combine(GlobalParameters.BaseDocFolder + "/" + obj.QuoteId + ".pdf");
                
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }
                catch (Exception ex) { }
                var genicprofile = (from ii in _context.GenicProfile select ii).FirstOrDefault();

                //Create Document
                var doc1 = new Document();
                doc1.AddAuthor("BT");
                doc1.AddCreator("Bthrust");
                doc1.AddKeywords(obj.QuoteId.ToUpper());
                doc1.AddSubject(genicprofile.Name);
                doc1.AddTitle(genicprofile.Name);
                //Create Document Instance and load in 'doc1'
                var streamObj = new System.IO.FileStream(filePath, System.IO.FileMode.CreateNew);
                PdfWriter.GetInstance(doc1, streamObj);

                doc1.Open();

                PdfPTable table = new PdfPTable(100);
                table.WidthPercentage = 100;

                //create header image
                Image jpg = Image.GetInstance(genicprofile.QuotationHeader);
                jpg.ScaleToFit(520f, 150f);
                PdfPCell cellHead = new PdfPCell(jpg);
                cellHead.Colspan = 100;
                cellHead.Border = 0;
                cellHead.PaddingLeft = 0;
                cellHead.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHead.VerticalAlignment = Element.ALIGN_TOP;
                cellHead.BackgroundColor = BaseColor.WHITE;
                table.AddCell(cellHead);

                PdfPCell row9 = new PdfPCell();
                row9.Colspan = 100;
                row9.Border = 0;
                row9.PaddingBottom = 20;
                row9.HorizontalAlignment = Element.ALIGN_CENTER;
                row9.VerticalAlignment = Element.ALIGN_MIDDLE;
                row9.PaddingTop = 10;
                row9.Phrase = new Phrase("Quotation", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0)));
                row9.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row9.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row9);

                PdfPCell row10col1 = new PdfPCell();
                row10col1.Colspan = 15;
                row10col1.Border = 0;
                row10col1.Padding = 0;
                row10col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col1.PaddingTop = 5;
                row10col1.Phrase = new Phrase("To:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col1);

                PdfPCell row10col2 = new PdfPCell();
                row10col2.Colspan = 50;
                row10col2.Border = 0;
                row10col2.Padding = 0;
                row10col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col2.PaddingTop = 5;
                row10col2.Phrase = new Phrase(obj.CompanyName, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col2);

                PdfPCell row10col3 = new PdfPCell();
                row10col3.Colspan = 15;
                row10col3.Border = 0;
                row10col3.Padding = 0;
                row10col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col3.PaddingTop = 5;
                row10col3.Phrase = new Phrase("Quotation No:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col3);

                PdfPCell row10col4 = new PdfPCell();
                row10col4.Colspan = 20;
                row10col4.Border = 0;
                row10col4.Padding = 0;
                row10col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col4.PaddingTop = 5;
                row10col4.Phrase = new Phrase(obj.QuoteId, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col4);

                PdfPCell row11col1a = new PdfPCell();
                row11col1a.Colspan = 15;
                row11col1a.Border = 0;
                row11col1a.Padding = 0;
                row11col1a.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col1a.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col1a.PaddingTop = 5;
                row11col1a.Phrase = new Phrase("Address:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col1a.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col1a.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col1a);

                var add = (from a in _context.Property where a.Id == obj.PropertyId select a).FirstOrDefault();
                var tempAddress = add.AddressStreet1 + " " + add.AddressStreet2 + " " + add.AddressUnitNo + " " + add.AddressCity + " " + add.AddressCountry + " " + add.AddressZipCode;
                PdfPCell row11col1 = new PdfPCell();
                row11col1.Colspan = 50;
                row11col1.Border = 0;
                row11col1.Padding = 0;
                row11col1.PaddingRight = 20;
                row11col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col1.PaddingTop = 5;
                row11col1.Phrase = new Phrase(tempAddress, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col1);

                PdfPCell row11col2 = new PdfPCell();
                row11col2.Colspan = 15;
                row11col2.Border = 0;
                row11col2.Padding = 0;
                row11col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col2.PaddingTop = 5;
                row11col2.Phrase = new Phrase("Date: ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col2);

                PdfPCell row11col3 = new PdfPCell();
                row11col3.Colspan = 20;
                row11col3.Border = 0;
                row11col3.Padding = 0;
                row11col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col3.PaddingTop = 5;
                row11col3.Phrase = new Phrase(obj.CreatedUtcDate.Value.Date.ToString("dd-MMM-yyyy"), new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col3);

                PdfPCell row14col1 = new PdfPCell();
                row14col1.Colspan = 15;
                row14col1.Border = 0;
                row14col1.Padding = 0;
                row14col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col1.PaddingTop = 5;
                row14col1.Phrase = new Phrase("Attention:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col1);

                PdfPCell row14col2 = new PdfPCell();
                row14col2.Colspan = 50;
                row14col2.Border = 0;
                row14col2.Padding = 0;
                row14col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col2.PaddingTop = 5;
                row14col2.Phrase = new Phrase(obj.Attention, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col2);


                PdfPCell row13col3 = new PdfPCell();
                row13col3.Colspan = 15;
                row13col3.Border = 0;
                row13col3.Padding = 0;
                row13col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col3.PaddingTop = 5;
                row13col3.Phrase = new Phrase("Prepared By:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col3);

                PdfPCell row13col4 = new PdfPCell();
                row13col4.Colspan = 20;
                row13col4.Border = 0;
                row13col4.Padding = 0;
                row13col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col4.PaddingTop = 5;
                row13col4.Phrase = new Phrase(obj.PreparedBy, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col4);


                PdfPCell row14col3 = new PdfPCell();
                row14col3.Colspan = 15;
                row14col3.Border = 0;
                row14col3.Padding = 0;
                row14col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col3.PaddingTop = 5;
                row14col3.Phrase = new Phrase("Contact No:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col3);

                PdfPCell row14col4 = new PdfPCell();
                row14col4.Colspan = 50;
                row14col4.Border = 0;
                row14col4.Padding = 0;
                row14col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col4.PaddingTop = 5;
                row14col4.Phrase = new Phrase(obj.CustomerContactNo, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col4);


                PdfPCell row15col1 = new PdfPCell();
                row15col1.Colspan = 15;
                row15col1.Border = 0;
                row15col1.Padding = 0;
                row15col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col1.PaddingTop = 5;
                row15col1.Phrase = new Phrase("", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row15col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row15col1);

                PdfPCell row15col2 = new PdfPCell();
                row15col2.Colspan = 20;
                row15col2.Border = 0;
                row15col2.Padding = 0;
                row15col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col2.PaddingTop = 5;
                row15col2.Phrase = new Phrase("", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row15col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row15col2);


                PdfPCell row18 = new PdfPCell();
                row18.Colspan = 100;
                row18.Border = 0;
                row18.Padding = 0;
                row18.HorizontalAlignment = Element.ALIGN_CENTER;
                row18.VerticalAlignment = Element.ALIGN_BOTTOM;
                row18.PaddingTop = 0;
                row18.Phrase = new Phrase("__________________________________________________________", new Font(Font.FontFamily.HELVETICA, 16, Font.BOLD, new BaseColor(136, 136, 136)));
                row18.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row18.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row18);

                PdfPCell row19s = new PdfPCell();
                row19s.Colspan = 100;
                row19s.Border = 0;
                row19s.PaddingTop = 20;
                row19s.HorizontalAlignment = Element.ALIGN_LEFT;
                row19s.VerticalAlignment = Element.ALIGN_MIDDLE;
                row19s.PaddingTop = 6;
                row19s.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row19s.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row19s.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row19s);

                PdfPCell row19 = new PdfPCell();
                row19.Colspan = 100;
                row19.Border = 0;
                row19.PaddingTop = 10;
                row19.HorizontalAlignment = Element.ALIGN_LEFT;
                row19.VerticalAlignment = Element.ALIGN_MIDDLE;
                row19.PaddingTop = 6;
                row19.Phrase = new Phrase("Dear Sir/Madam,", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row19.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row19.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row19);

                PdfPCell row20 = new PdfPCell();
                row20.Colspan = 100;
                row20.Border = 0;
                row20.Padding = 0;
                row20.HorizontalAlignment = Element.ALIGN_LEFT;
                row20.VerticalAlignment = Element.ALIGN_MIDDLE;
                row20.PaddingTop = 6;
                row20.Phrase = new Phrase("Subject: ", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row20.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row20.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row20);

                PdfPCell row21 = new PdfPCell();
                row21.Colspan = 100;
                row21.Border = 0;
                row21.Padding = 0;
                row21.HorizontalAlignment = Element.ALIGN_LEFT;
                row21.VerticalAlignment = Element.ALIGN_MIDDLE;
                row21.PaddingTop = 6;
                row21.Phrase = new Phrase(obj.JobTitle, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row21.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row21.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row21);

                PdfPCell row21space = new PdfPCell();
                row21space.Colspan = 100;
                row21space.Border = 0;
                row21space.Padding = 0;
                row21space.HorizontalAlignment = Element.ALIGN_LEFT;
                row21space.VerticalAlignment = Element.ALIGN_MIDDLE;
                row21space.PaddingTop = 10;
                row21space.Phrase = new Phrase(".", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row21space.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row21space.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row21space);

                PdfPCell cell = new PdfPCell();
                cell.Colspan = 8;
                cell.HorizontalAlignment = Element.ALIGN_CENTER;
                cell.VerticalAlignment = Element.ALIGN_MIDDLE;
                cell.BackgroundColor = BaseColor.WHITE;
                cell.PaddingTop = 3;
                cell.PaddingRight = 5;
                cell.PaddingLeft = 5;
                cell.PaddingBottom = 8;
                cell.Phrase = new Phrase("S/No", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                cell.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cell);

                PdfPCell cell1 = new PdfPCell();
                cell1.Colspan = 52;
                cell1.PaddingTop = 3;
                cell1.PaddingRight = 5;
                cell1.PaddingLeft = 5;
                cell1.PaddingBottom = 8;
                cell1.HorizontalAlignment = Element.ALIGN_CENTER;
                cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                cell1.BackgroundColor = BaseColor.WHITE;
                cell1.Phrase = new Phrase("Description", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cell1);

                PdfPCell cell2 = new PdfPCell();
                cell2.Colspan = 10;
                cell2.PaddingTop = 3;
                cell2.PaddingRight = 5;
                cell2.PaddingLeft = 5;
                cell2.PaddingBottom = 8;
                cell2.HorizontalAlignment = Element.ALIGN_CENTER;
                cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                cell2.BackgroundColor = BaseColor.WHITE;
                cell2.Phrase = new Phrase("Qty", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cell2);

                PdfPCell cell3 = new PdfPCell();
                cell3.Colspan = 15;
                cell3.PaddingTop = 3;
                cell3.PaddingRight = 5;
                cell3.PaddingLeft = 5;
                cell3.PaddingBottom = 8;
                cell3.HorizontalAlignment = Element.ALIGN_CENTER;
                cell3.VerticalAlignment = Element.ALIGN_MIDDLE;
                cell3.BackgroundColor = BaseColor.WHITE;
                cell3.Phrase = new Phrase("Unit Price S$", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cell3);

                PdfPCell cell4 = new PdfPCell();
                cell4.Colspan = 15;
                cell4.PaddingTop = 3;
                cell4.PaddingRight = 5;
                cell4.PaddingLeft = 5;
                cell3.PaddingBottom = 8;
                cell4.HorizontalAlignment = Element.ALIGN_CENTER;
                cell4.VerticalAlignment = Element.ALIGN_MIDDLE;
                cell4.BackgroundColor = BaseColor.WHITE;
                cell4.Phrase = new Phrase("Amount S$ ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cell4);

                if (QuoteItemList != null)
                {
                    int slNo = 1;
                    foreach (var i in QuoteItemList)
                    {
                        PdfPCell row1cell1 = new PdfPCell();
                        row1cell1.Colspan = 8;
                        row1cell1.PaddingTop = 3;
                        row1cell1.PaddingRight = 5;
                        row1cell1.PaddingLeft = 5;
                        row1cell1.PaddingBottom = 8;
                        row1cell1.HorizontalAlignment = Element.ALIGN_CENTER;
                        row1cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1cell1.BackgroundColor = BaseColor.WHITE;
                        row1cell1.Phrase = new Phrase(slNo.ToString(), new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                        row1cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1cell1);

                        PdfPCell row2cell1 = new PdfPCell();
                        row2cell1.Colspan = 52;
                        row2cell1.PaddingTop = 3;
                        row2cell1.PaddingRight = 5;
                        row2cell1.PaddingLeft = 5;
                        row2cell1.PaddingBottom = 8;
                        row2cell1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2cell1.BackgroundColor = BaseColor.WHITE;
                        row2cell1.Phrase = new Phrase(i.ItemName + "-" + i.ItemDescription, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                        row2cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2cell1);

                        string _qty = i.Qty.ToString(".00");
                        if(i.Type == "Service")
                        {
                            _qty = "";
                        }
                        PdfPCell row2cell2 = new PdfPCell();
                        row2cell2.Colspan = 10;
                        row2cell2.PaddingTop = 3;
                        row2cell2.PaddingRight = 5;
                        row2cell2.PaddingLeft = 5;
                        row2cell2.PaddingBottom = 8;
                        row2cell2.HorizontalAlignment = Element.ALIGN_CENTER;
                        row2cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2cell2.BackgroundColor = BaseColor.WHITE;
                        row2cell2.Phrase = new Phrase(_qty, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                        row2cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2cell2);

                        PdfPCell row2cell3 = new PdfPCell();
                        row2cell3.Colspan = 15;
                        row2cell3.PaddingTop = 3;
                        row2cell3.PaddingRight = 5;
                        row2cell3.PaddingLeft = 5;
                        row2cell3.PaddingBottom = 8;
                        row2cell3.HorizontalAlignment = Element.ALIGN_RIGHT;
                        row2cell3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2cell3.BackgroundColor = BaseColor.WHITE;
                        row2cell3.Phrase = new Phrase(i.UnitCost.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                        row2cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2cell3);

                        PdfPCell row2cell4 = new PdfPCell();
                        row2cell4.Colspan = 15;
                        row2cell4.PaddingTop = 3;
                        row2cell4.PaddingRight = 5;
                        row2cell4.PaddingLeft = 5;
                        row2cell4.PaddingBottom = 8;
                        row2cell4.HorizontalAlignment = Element.ALIGN_RIGHT;
                        row2cell4.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2cell4.BackgroundColor = BaseColor.WHITE;
                        row2cell4.Phrase = new Phrase(i.Total.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                        row2cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2cell4);
                        slNo++;
                    }
                }


                PdfPCell row07cell1 = new PdfPCell();
                row07cell1.Colspan = 60;
                row07cell1.Rowspan = 4;
                row07cell1.HorizontalAlignment = Element.ALIGN_CENTER;
                row07cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row07cell1.BackgroundColor = BaseColor.WHITE;
                row07cell1.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(System.Drawing.Color.Black)));
                row07cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row07cell1);


                PdfPCell row08cell1 = new PdfPCell();
                row08cell1.Colspan = 25;
                row08cell1.PaddingTop = 3;
                row08cell1.PaddingRight = 5;
                row08cell1.PaddingLeft = 5;
                row08cell1.PaddingBottom = 8;
                row08cell1.HorizontalAlignment = Element.ALIGN_RIGHT;
                row08cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row08cell1.BackgroundColor = BaseColor.WHITE;
                row08cell1.Phrase = new Phrase("Sub Total", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row08cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row08cell1);

                var TotalAmount = obj.SubTotal + obj.TaxAmount - obj.DiscountAmount;

                PdfPCell row09cell1 = new PdfPCell();
                row09cell1.Colspan = 15;
                row09cell1.PaddingTop = 3;
                row09cell1.PaddingRight = 5;
                row09cell1.PaddingLeft = 5;
                row09cell1.PaddingBottom = 8;
                row09cell1.HorizontalAlignment = Element.ALIGN_RIGHT;
                row09cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row09cell1.BackgroundColor = BaseColor.WHITE;
                row09cell1.Phrase = new Phrase("$" + obj.SubTotal.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row09cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row09cell1);

                if (obj.DiscountType == 0)
                {
                    PdfPCell row08cellDIsc = new PdfPCell();
                    row08cellDIsc.Colspan = 25;
                    row08cellDIsc.PaddingTop = 3;
                    row08cellDIsc.PaddingRight = 5;
                    row08cellDIsc.PaddingLeft = 5;
                    row08cellDIsc.PaddingBottom = 8;
                    row08cellDIsc.HorizontalAlignment = Element.ALIGN_RIGHT;
                    row08cellDIsc.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row08cellDIsc.BackgroundColor = BaseColor.WHITE;
                    row08cellDIsc.Phrase = new Phrase("Disc(Amount)", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                    row08cellDIsc.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row08cellDIsc);
                }
                else
                {
                    PdfPCell row08cellDIsc = new PdfPCell();
                    row08cellDIsc.Colspan = 25;
                    row08cellDIsc.PaddingTop = 3;
                    row08cellDIsc.PaddingRight = 5;
                    row08cellDIsc.PaddingLeft = 5;
                    row08cellDIsc.PaddingBottom = 8;
                    row08cellDIsc.HorizontalAlignment = Element.ALIGN_RIGHT;
                    row08cellDIsc.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row08cellDIsc.BackgroundColor = BaseColor.WHITE;
                    row08cellDIsc.Phrase = new Phrase("Disc(" + obj.DiscountTextValue + "%)", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                    row08cellDIsc.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row08cellDIsc);
                }


                PdfPCell row09cellDiscVal = new PdfPCell();
                row09cellDiscVal.Colspan = 15;
                row09cellDiscVal.PaddingTop = 3;
                row09cellDiscVal.PaddingRight = 5;
                row09cellDiscVal.PaddingLeft = 5;
                row09cellDiscVal.PaddingBottom = 8;
                row09cellDiscVal.HorizontalAlignment = Element.ALIGN_RIGHT;
                row09cellDiscVal.VerticalAlignment = Element.ALIGN_MIDDLE;
                row09cellDiscVal.BackgroundColor = BaseColor.WHITE;
                row09cellDiscVal.Phrase = new Phrase("$" + obj.DiscountAmount.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row09cellDiscVal.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row09cellDiscVal);


                PdfPCell row08cellGST = new PdfPCell();
                row08cellGST.Colspan = 25;
                row08cellGST.PaddingTop = 3;
                row08cellGST.PaddingRight = 5;
                row08cellGST.PaddingLeft = 5;
                row08cellGST.PaddingBottom = 8;
                row08cellGST.HorizontalAlignment = Element.ALIGN_RIGHT;
                row08cellGST.VerticalAlignment = Element.ALIGN_MIDDLE;
                row08cellGST.BackgroundColor = BaseColor.WHITE;
                row08cellGST.Phrase = new Phrase("GST(" + obj.TaxRate + "%)", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row08cellGST.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row08cellGST);

                PdfPCell row09cellGSTVal = new PdfPCell();
                row09cellGSTVal.Colspan = 15;
                row09cellGSTVal.PaddingTop = 3;
                row09cellGSTVal.PaddingRight = 5;
                row09cellGSTVal.PaddingLeft = 5;
                row09cellGSTVal.PaddingBottom = 8;
                row09cellGSTVal.HorizontalAlignment = Element.ALIGN_RIGHT;
                row09cellGSTVal.VerticalAlignment = Element.ALIGN_MIDDLE;
                row09cellGSTVal.BackgroundColor = BaseColor.WHITE;
                row09cellGSTVal.Phrase = new Phrase("$" + obj.TaxAmount.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row09cellGSTVal.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row09cellGSTVal);


                PdfPCell row08cellTotal = new PdfPCell();
                row08cellTotal.Colspan = 25;
                row08cellTotal.PaddingTop = 3;
                row08cellTotal.PaddingRight = 5;
                row08cellTotal.PaddingLeft = 5;
                row08cellTotal.PaddingBottom = 8;
                row08cellTotal.HorizontalAlignment = Element.ALIGN_RIGHT;
                row08cellTotal.VerticalAlignment = Element.ALIGN_MIDDLE;
                row08cellTotal.BackgroundColor = BaseColor.WHITE;
                row08cellTotal.Phrase = new Phrase("Total", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row08cellTotal.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row08cellTotal);

                PdfPCell row08cellTotalVal = new PdfPCell();
                row08cellTotalVal.Colspan = 15;
                row08cellTotalVal.PaddingTop = 3;
                row08cellTotalVal.PaddingRight = 5;
                row08cellTotalVal.PaddingLeft = 5;
                row08cellTotalVal.PaddingBottom = 8;
                row08cellTotalVal.HorizontalAlignment = Element.ALIGN_RIGHT;
                row08cellTotalVal.VerticalAlignment = Element.ALIGN_MIDDLE;
                row08cellTotalVal.BackgroundColor = BaseColor.WHITE;
                row08cellTotalVal.Phrase = new Phrase("$" + TotalAmount.ToString("0.00"), new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(System.Drawing.Color.Black)));
                row08cellTotalVal.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row08cellTotalVal);

                if (obj.InternalNotes != null)
                {
                    PdfPCell rowAddRemarks = new PdfPCell();
                    rowAddRemarks.Colspan = 100;
                    rowAddRemarks.Border = 0;
                    rowAddRemarks.PaddingTop = 30;
                    rowAddRemarks.PaddingRight = 5;
                    rowAddRemarks.PaddingLeft = 5;
                    rowAddRemarks.PaddingBottom = 8;
                    rowAddRemarks.HorizontalAlignment = Element.ALIGN_LEFT;
                    rowAddRemarks.VerticalAlignment = Element.ALIGN_MIDDLE;
                    rowAddRemarks.Phrase = new Phrase("Additional Remark(s)", new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD, new BaseColor(0, 0, 0)));
                    rowAddRemarks.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    rowAddRemarks.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(rowAddRemarks);

                    PdfPCell rowAddRemarksVal = new PdfPCell();
                    rowAddRemarks.Colspan = 100;
                    rowAddRemarks.Border = 0;
                    rowAddRemarks.PaddingTop = 0;
                    rowAddRemarks.PaddingRight = 5;
                    rowAddRemarks.PaddingLeft = 5;
                    rowAddRemarks.PaddingBottom = 8;
                    rowAddRemarks.HorizontalAlignment = Element.ALIGN_LEFT;
                    rowAddRemarks.VerticalAlignment = Element.ALIGN_MIDDLE;
                    rowAddRemarks.Phrase = new Phrase(obj.InternalNotes, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                    rowAddRemarks.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    rowAddRemarks.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(rowAddRemarks);
                }


                if (obj.QuoteTermsAndCondition != null)
                {
                    PdfPCell rowTermsCondition = new PdfPCell();
                    rowTermsCondition.Colspan = 100;
                    rowTermsCondition.Border = 0;
                    rowTermsCondition.PaddingTop = 30;
                    rowTermsCondition.PaddingRight = 5;
                    rowTermsCondition.PaddingLeft = 5;
                    rowTermsCondition.PaddingBottom = 8;
                    rowTermsCondition.HorizontalAlignment = Element.ALIGN_LEFT;
                    rowTermsCondition.VerticalAlignment = Element.ALIGN_MIDDLE;
                    rowTermsCondition.Phrase = new Phrase("Terms & Conditions", new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD, new BaseColor(0, 0, 0)));
                    rowTermsCondition.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    rowTermsCondition.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(rowTermsCondition);

                    PdfPCell rowTermsConditionVal = new PdfPCell();
                    rowTermsConditionVal.Colspan = 100;
                    rowTermsConditionVal.Border = 0;
                    rowTermsConditionVal.PaddingTop = 0;
                    rowTermsConditionVal.PaddingRight = 5;
                    rowTermsConditionVal.PaddingLeft = 5;
                    rowTermsConditionVal.PaddingBottom = 8;
                    rowTermsConditionVal.HorizontalAlignment = Element.ALIGN_LEFT;
                    rowTermsConditionVal.VerticalAlignment = Element.ALIGN_MIDDLE;
                    rowTermsConditionVal.Phrase = new Phrase(obj.QuoteTermsAndCondition, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                    rowTermsConditionVal.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    rowTermsConditionVal.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(rowTermsConditionVal);
                }


                doc1.Add(table);
                doc1.NewPage();
                //Create a table with number of columns
                PdfPTable table1 = new PdfPTable(100);
                table1.WidthPercentage = 100;

                //create header image
                Image jpg1 = Image.GetInstance(genicprofile.QuotationHeader);
                jpg1.ScaleToFit(520f, 150f);
                PdfPCell cellHead1 = new PdfPCell(jpg1);
                cellHead1.Colspan = 100;
                cellHead1.Border = 0;
                cellHead1.PaddingLeft = 0;
                cellHead1.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHead1.VerticalAlignment = Element.ALIGN_TOP;
                cellHead1.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(cellHead1);


                PdfPCell row91 = new PdfPCell();
                row91.Colspan = 100;
                row91.Border = 0;
                row91.PaddingBottom = 20;
                row91.HorizontalAlignment = Element.ALIGN_CENTER;
                row91.VerticalAlignment = Element.ALIGN_MIDDLE;
                row91.PaddingTop = 10;
                row91.Phrase = new Phrase("Quotation", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0)));
                row91.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row91.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row91);

                PdfPCell row10col11 = new PdfPCell();
                row10col11.Colspan = 15;
                row10col11.Border = 0;
                row10col11.Padding = 0;
                row10col11.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col11.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col11.PaddingTop = 5;
                row10col11.Phrase = new Phrase("To:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col11.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col11.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row10col11);

                PdfPCell row10col21 = new PdfPCell();
                row10col21.Colspan = 50;
                row10col21.Border = 0;
                row10col21.Padding = 0;
                row10col21.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col21.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col21.PaddingTop = 5;
                row10col21.Phrase = new Phrase(obj.CompanyName, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col21.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col21.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row10col21);

                PdfPCell row10col31 = new PdfPCell();
                row10col31.Colspan = 15;
                row10col31.Border = 0;
                row10col31.Padding = 0;
                row10col31.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col31.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col31.PaddingTop = 5;
                row10col31.Phrase = new Phrase("Quotation No:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col31.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col31.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row10col31);

                PdfPCell row10col41 = new PdfPCell();
                row10col41.Colspan = 20;
                row10col41.Border = 0;
                row10col41.Padding = 0;
                row10col41.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col41.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col41.PaddingTop = 5;
                row10col41.Phrase = new Phrase(obj.QuoteId, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col41.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col41.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row10col41);


                PdfPCell row11col11q = new PdfPCell();
                row11col11q.Colspan = 15;
                row11col11q.Border = 0;
                row11col11q.Padding = 0;
                row11col11q.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col11q.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col11q.PaddingTop = 5;
                row11col11q.Phrase = new Phrase("Address:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col11q.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col11q.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row11col11q);

                PdfPCell row11col11 = new PdfPCell();
                row11col11.Colspan = 50;
                row11col11.Border = 0;
                row11col11.Padding = 0;
                row11col11.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col11.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col11.PaddingTop = 5;
                row11col11.Phrase = new Phrase(tempAddress, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col11.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col11.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row11col11);

                PdfPCell row11col21 = new PdfPCell();
                row11col21.Colspan = 15;
                row11col21.Border = 0;
                row11col21.Padding = 0;
                row11col21.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col21.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col21.PaddingTop = 5;
                row11col21.Phrase = new Phrase("Date:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col21.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col21.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row11col21);

                PdfPCell row11col31 = new PdfPCell();
                row11col31.Colspan = 20;
                row11col31.Border = 0;
                row11col31.Padding = 0;
                row11col31.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col31.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col31.PaddingTop = 5;
                row11col31.Phrase = new Phrase(obj.CreatedUtcDate.Value.Date.ToString("dd-MMM-yyyy"), new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col31.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col31.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row11col31);

                PdfPCell row14col11 = new PdfPCell();
                row14col11.Colspan = 15;
                row14col11.Border = 0;
                row14col11.Padding = 0;
                row14col11.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col11.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col11.PaddingTop = 5;
                row14col11.Phrase = new Phrase("Attention:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col11.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col11.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row14col11);

                PdfPCell row14col21 = new PdfPCell();
                row14col21.Colspan = 50;
                row14col21.Border = 0;
                row14col21.Padding = 0;
                row14col21.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col21.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col21.PaddingTop = 5;
                row14col21.Phrase = new Phrase(obj.Attention, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col21.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col21.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row14col21);

                PdfPCell row13col31 = new PdfPCell();
                row13col31.Colspan = 15;
                row13col31.Border = 0;
                row13col31.Padding = 0;
                row13col31.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col31.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col31.PaddingTop = 5;
                row13col31.Phrase = new Phrase("Prepared By:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col31.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col31.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row13col31);

                PdfPCell row13col41 = new PdfPCell();
                row13col41.Colspan = 20;
                row13col41.Border = 0;
                row13col41.Padding = 0;
                row13col41.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col41.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col41.PaddingTop = 5;
                row13col41.Phrase = new Phrase(obj.PreparedBy, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col41.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col41.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row13col41);

                PdfPCell row14col31 = new PdfPCell();
                row14col31.Colspan = 15;
                row14col31.Border = 0;
                row14col31.Padding = 0;
                row14col31.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col31.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col31.PaddingTop = 5;
                row14col31.Phrase = new Phrase("Contact No:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col31.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col31.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row14col31);

                PdfPCell row14col41 = new PdfPCell();
                row14col41.Colspan = 50;
                row14col41.Border = 0;
                row14col41.Padding = 0;
                row14col41.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col41.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col41.PaddingTop = 5;
                row14col41.Phrase = new Phrase(obj.CustomerContactNo, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col41.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col41.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row14col41);


                PdfPCell row15col11 = new PdfPCell();
                row15col11.Colspan = 15;
                row15col11.Border = 0;
                row15col11.Padding = 0;
                row15col11.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col11.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col11.PaddingTop = 5;
                row15col11.Phrase = new Phrase("", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row15col11.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col11.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row15col11);

                PdfPCell row15col21 = new PdfPCell();
                row15col21.Colspan = 20;
                row15col21.Border = 0;
                row15col21.Padding = 0;
                row15col21.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col21.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col21.PaddingTop = 5;
                row15col21.Phrase = new Phrase("", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row15col21.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col21.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row15col21);


                PdfPCell row181 = new PdfPCell();
                row181.Colspan = 100;
                row181.Border = 0;
                row181.Padding = 0;
                row181.HorizontalAlignment = Element.ALIGN_CENTER;
                row181.VerticalAlignment = Element.ALIGN_BOTTOM;
                row181.PaddingTop = 0;
                row181.Phrase = new Phrase("__________________________________________________________", new Font(Font.FontFamily.HELVETICA, 16, Font.BOLD, new BaseColor(136, 136, 136)));
                row181.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row181.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row181);

                PdfPCell row17col412 = new PdfPCell();
                row17col412.Colspan = 100;
                row17col412.Border = 0;
                row17col412.Padding = 0;
                row17col412.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col412.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col412.PaddingTop = 20;
                row17col412.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col412.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col412.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col412);

                PdfPCell row17col4132 = new PdfPCell();
                row17col4132.Colspan = 100;
                row17col4132.Border = 0;
                row17col4132.Padding = 0;
                row17col4132.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4132.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4132.PaddingTop = 15;
                row17col4132.Phrase = new Phrase("Should there be further clarifications required, please do not hesitate to contact the undersigned.", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4132.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4132.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4132);

                PdfPCell row17col4133 = new PdfPCell();
                row17col4133.Colspan = 100;
                row17col4133.Border = 0;
                row17col4133.Padding = 0;
                row17col4133.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4133.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4133.PaddingTop = 15;
                row17col4133.Phrase = new Phrase("We will gladly do our best to help you.", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4133.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4133.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4133);


                PdfPCell row17col4134 = new PdfPCell();
                row17col4134.Colspan = 100;
                row17col4134.Border = 0;
                row17col4134.Padding = 0;
                row17col4134.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4134.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4134.PaddingTop = 15;
                row17col4134.Phrase = new Phrase("Yours faithfully.", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4134.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4134.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4134);


                PdfPCell row1811 = new PdfPCell();
                row1811.Colspan = 50;
                row1811.Border = 0;
                row1811.PaddingTop = 20;
                row1811.HorizontalAlignment = Element.ALIGN_LEFT;
                row1811.VerticalAlignment = Element.ALIGN_BOTTOM;
                row1811.Phrase = new Phrase(genicprofile.Name, new Font(Font.FontFamily.HELVETICA, 11, Font.BOLD, new BaseColor(0, 0, 0)));
                row1811.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row1811.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row1811);

                PdfPCell row1812 = new PdfPCell();
                row1812.Colspan = 50;
                row1812.Border = 0;
                row1812.PaddingTop = 20;
                row1812.HorizontalAlignment = Element.ALIGN_LEFT;
                row1812.VerticalAlignment = Element.ALIGN_BOTTOM;
                row1812.Phrase = new Phrase("Confirmed and Accepted by :", new Font(Font.FontFamily.HELVETICA, 11, Font.BOLD, new BaseColor(0, 0, 0)));
                row1812.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row1812.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row1812);

                string noattachment = (obj.SalesPersonSignature);
                if (!string.IsNullOrEmpty(obj.SalesPersonSignature))
                {
                    noattachment = obj.SalesPersonSignature;
                }
                else { noattachment = _hostingEnvironment.WebRootPath + "\\assets\\users\\NoSignature.jpg"; }

                Image jpgcellsign = Image.GetInstance(noattachment);
                jpgcellsign.ScaleToFit(160f, 50f);
                PdfPCell cellHeadcellsign = new PdfPCell(jpgcellsign);
                cellHeadcellsign.Colspan = 50;
                cellHeadcellsign.PaddingTop = 10;
                cellHeadcellsign.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHeadcellsign.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHeadcellsign.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellHeadcellsign.BackgroundColor = BaseColor.WHITE;
                cellHeadcellsign.Border = 0;
                table1.AddCell(cellHeadcellsign);

                string custattachment = (obj.CustomerSignature);
                if (!string.IsNullOrEmpty(obj.CustomerSignature))
                {
                    custattachment = obj.CustomerSignature;
                }
                else { custattachment = _hostingEnvironment.WebRootPath + "\\assets\\users\\NoSignature.jpg"; }

                Image jpgcellsign3 = Image.GetInstance(custattachment);
                jpgcellsign3.ScaleToFit(160f, 50f);
                PdfPCell cellHeadcellsign3 = new PdfPCell(jpgcellsign3);
                cellHeadcellsign3.Colspan = 50;
                cellHeadcellsign3.PaddingTop = 10;
                cellHeadcellsign3.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHeadcellsign3.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHeadcellsign3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellHeadcellsign3.BackgroundColor = BaseColor.WHITE;
                cellHeadcellsign3.Border = 0;
                table1.AddCell(cellHeadcellsign3);


                PdfPCell row1815 = new PdfPCell();
                row1815.Colspan = 50;
                row1815.Border = 0;
                row1815.Padding = 0;
                row1815.HorizontalAlignment = Element.ALIGN_LEFT;
                row1815.VerticalAlignment = Element.ALIGN_BOTTOM;
                row1815.Phrase = new Phrase("______________________", new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD, new BaseColor(136, 136, 136)));
                row1815.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row1815.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row1815);

                PdfPCell row1816 = new PdfPCell();
                row1816.Colspan = 50;
                row1816.Border = 0;
                row1816.Padding = 0;
                row1816.HorizontalAlignment = Element.ALIGN_LEFT;
                row1816.VerticalAlignment = Element.ALIGN_BOTTOM;
                row1816.Phrase = new Phrase("______________________", new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD, new BaseColor(136, 136, 136)));
                row1816.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row1816.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row1816);

                PdfPCell row17col4135 = new PdfPCell();
                row17col4135.Colspan = 50;
                row17col4135.Border = 0;
                row17col4135.Padding = 0;
                row17col4135.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4135.VerticalAlignment = Element.ALIGN_BOTTOM;
                row17col4135.PaddingTop = 10;
                row17col4135.Phrase = new Phrase(obj.SalesRepresentative, new Font(Font.FontFamily.HELVETICA, 20, Font.BOLD, new BaseColor(0, 0, 179)));
                row17col4135.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4135.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4135);

                PdfPCell row17col4136 = new PdfPCell();
                row17col4136.Colspan = 50;
                row17col4136.Border = 0;
                row17col4136.Padding = 0;
                row17col4136.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4136.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4136.PaddingTop = 10;
                row17col4136.Phrase = new Phrase("Authorized Signature & Name", new Font(Font.FontFamily.HELVETICA, 10, Font.ITALIC, new BaseColor(0, 0, 0)));
                row17col4136.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4136.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4136);


                PdfPCell row17col4137 = new PdfPCell();
                row17col4137.Colspan = 50;
                row17col4137.Border = 0;
                row17col4137.Padding = 0;
                row17col4137.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4137.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4137.PaddingTop = 10;
                row17col4137.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4137.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4137.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4137);

                PdfPCell row17col4138 = new PdfPCell();
                row17col4138.Colspan = 50;
                row17col4138.Border = 0;
                row17col4138.Padding = 0;
                row17col4138.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4138.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4138.PaddingTop = 10;
                row17col4138.Phrase = new Phrase("Designation:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4138.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4138.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4138);

                PdfPCell row17col4139 = new PdfPCell();
                row17col4139.Colspan = 50;
                row17col4139.Border = 0;
                row17col4139.Padding = 0;
                row17col4139.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4139.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4139.PaddingTop = 10;
                row17col4139.Phrase = new Phrase("Mobile : " + getUserDetails.MobileNumber + "", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4139.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4139.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4139);

                PdfPCell row17col4140 = new PdfPCell();
                row17col4140.Colspan = 50;
                row17col4140.Border = 0;
                row17col4140.Padding = 0;
                row17col4140.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4140.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4140.PaddingTop = 10;
                row17col4140.Phrase = new Phrase("Date:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4140.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4140.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4140);

                PdfPCell row17col4141 = new PdfPCell();
                row17col4141.Colspan = 50;
                row17col4141.Border = 0;
                row17col4141.Padding = 0;
                row17col4141.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4141.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4141.PaddingTop = 10;
                row17col4141.Phrase = new Phrase("Email : " + getUserDetails.Email + "", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4141.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4141.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4141);

                PdfPCell row17col4142 = new PdfPCell();
                row17col4142.Colspan = 50;
                row17col4142.Border = 0;
                row17col4142.Padding = 0;
                row17col4142.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col4142.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col4142.PaddingTop = 10;
                row17col4142.Phrase = new Phrase("Company Stamp:", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col4142.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col4142.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row17col4142);


                doc1.Add(table1);
                doc1.Close();
                getCommonPath = filePath;
                try
                {
                    string end_point = GlobalParameters.AWS_FOLDER + "/Quote/" + obj.QuoteId + "/" + obj.QuoteId + ".pdf";
                    Byte[] bytes = File.ReadAllBytes(Path.Combine(_hostingEnvironment.ContentRootPath, filePath));
                    string base64String = Convert.ToBase64String(bytes);
                    Task.Delay(1000);
                    AWSHelper awshelper = new AWSHelper();
                    bool isUploaded = awshelper.SendDriveToAWS(base64String, "pdf", end_point, out string msg);
                }
                catch { }
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }
                catch (Exception) { }
            }
            catch (Exception ex)
            {

            }
        }
        #endregion End Quote

        #region Begin Ticket | Create Ticket
        public void createTicketBodyTemplate(Guid? TicketId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                Task.Yield();
                var Engineer_Name = string.Empty;
                var ticketResult = (from q in _context.Ticket where q.Id == TicketId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Create Ticket" select t).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                var team = (from e in _context.TicketTeam where e.TicketId == TicketId select e).ToList();
                if (team != null)
                {
                    foreach (var i in team)
                    {
                        if (i.EngineerName != "")
                        {
                            Engineer_Name = Engineer_Name + i.EngineerName + ",";
                        }
                    }
                }
                if (ticketResult != null && templateResult != null)
                {
                    if (isCust)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                
                            SmtpSendMailWithCalendar("Service Request for " + ticketResult.Title + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                            Task.Delay(1000);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    if (isAdmin)
                    {
                        var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                        if (adminResult != null)
                        {
                            try
                            {
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "")
                                    .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                SmtpSendMailWithCalendar("Service Request for " + ticketResult.Title + " for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, adminResult.Email, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                Task.Delay(1000);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                    if (notify.CreateTicketEngineer)
                    {
                        foreach (var i in team)
                        {
                            var tempEngineerMailBody = string.Empty;
                            tempEngineerMailBody = templateResult.EngineerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("USER_NAME", "" + i.EngineerName + "")
                                .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                            var engdetails = (from e in _context.Login where e.Id == i.EngineerId select e).FirstOrDefault();
                            if (engdetails.Email.Length > 0)
                            {
                                SmtpSendMailWithCalendar("Service Request for " + ticketResult.Title + " for " + ticketResult.CustomerCompanyName + "", tempEngineerMailBody, engdetails.Email, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                Task.Delay(1000);
                            }

                            var tempCreateTicketAppNotification = string.Empty;
                            tempCreateTicketAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                              .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                              .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                              .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                              .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                              .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                              .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                              .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                              .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                              .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                              .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                            var obj = new PushNotification(engdetails.AppToken, "New Service Request", tempCreateTicketAppNotification);
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        //Re-schedule Ticket
        public void ReScheduleTicketBodyTemplate(List<TicketTeam> oldTeam, Guid? TicketId, Guid? AdminId, DateTime? OldDate, string OldTime)
        {
            try
            {
                Task.Yield();
                var Engineer_Name = string.Empty;
                var OLD_ENGINEERS_NAME = string.Empty;
                bool IsEngiChange = false;
                bool IsAppointmentChange = false;

                var ticketResult = (from q in _context.Ticket where q.Id == TicketId select q).FirstOrDefault();
                if (ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") == OldDate.Value.Date.ToString("dd-MM-yyyy") && ticketResult.OneOffStartTime.ToString() == OldTime)
                {
                    IsAppointmentChange = false;
                }
                else
                {
                    IsAppointmentChange = true;
                }
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Reschedule Ticket" select t).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                var team = (from e in _context.TicketTeam where e.TicketId == TicketId select e).ToList();
                if (team != null)
                {
                    foreach (var i in team)
                    {
                        if (i.EngineerName != "")
                        {
                            Engineer_Name = Engineer_Name + i.EngineerName + ",";
                        }
                    }
                }
                if (ticketResult != null && templateResult != null && IsAppointmentChange == true)
                {
                    if (notify.RescheduleTicketCustomer)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                            SmtpSendMailWithCalendar("Update regarding your service request " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                            Task.Delay(1000);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    if (notify.RescheduleTicketEngineer)
                    {
                        foreach (var i in team)
                        {
                            try
                            {
                                var tempEngMailBody0 = string.Empty;
                                tempEngMailBody0 = templateResult.EngineerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("ENGINEER_NAME", "" + Engineer_Name + "");

                                var engdetails = (from s in _context.Login where s.Id == i.EngineerId select s).FirstOrDefault();
                                SmtpSendMailWithCalendar("Re-allocated/Re-scheduled" + ticketResult.Title + "", tempEngMailBody0 + "", engdetails.Email.Trim(), ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                Task.Delay(1000);
                                var tempREsInAppNotification = string.Empty;
                                tempREsInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                  .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                  .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                  .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                  .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                  .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                  .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                  .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                  .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                  .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                  .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                var obj = new PushNotification(engdetails.AppToken, "Reschedule Service", tempREsInAppNotification);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }

                    if (notify.RescheduleTicketAdmin)
                    {
                        var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                        if (adminResult != null)
                        {
                            try
                            {
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                     .Replace("OLD_APP_DATE", "" + OldDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("OLD_APP_TIME", "" + OldTime + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "");
                                SmtpSendMailWithCalendar(ticketResult.TicketId + " Rescheduled ", tempAdminMailBody, adminResult.Email, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                Task.Delay(1000);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                }

                // Re-Allocation section start
                try
                {
                    Engineer_Name = "";
                    OLD_ENGINEERS_NAME = "";
                    foreach (var m in oldTeam)
                    {
                        if (team.Any(b => b.EngineerId == m.EngineerId))
                        {

                        }
                        else
                        {
                            IsEngiChange = true;
                        }
                    }
                    foreach (var k in team)
                    {
                        if (oldTeam.Any(j => j.EngineerId == k.EngineerId))
                        {

                        }
                        else
                        {
                            IsEngiChange = true;
                        }
                    }



                    if (IsEngiChange == true)
                    {
                        if (team != null)
                        {
                            foreach (var i in team)
                            {
                                if (i.EngineerName != "")
                                {
                                    Engineer_Name = Engineer_Name + i.EngineerName + ",";
                                }
                            }
                        }

                        if (oldTeam != null)
                        {
                            foreach (var g in oldTeam)
                            {
                                if (g.EngineerName != "")
                                {
                                    OLD_ENGINEERS_NAME = OLD_ENGINEERS_NAME + g.EngineerName + ",";
                                }
                            }
                        }

                        var templateResult_Re_Allocation = (from t in _context.NotificationTemplate where t.ModuleName == "Ticket Re-Allocation" select t).FirstOrDefault();
                        if (ticketResult != null && templateResult_Re_Allocation != null)
                        {
                            if (notify.ReAllocateTicketCustomer)
                            {
                                try
                                {
                                    var tempCustMailBody_re = string.Empty;
                                    tempCustMailBody_re = templateResult_Re_Allocation.CustomerMailBody
                                        .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                        .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                        .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                        .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                        .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                        .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                        .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                        .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                        .Replace("ENGINEER_NAME", "" + Engineer_Name + "")
                                        .Replace("OLD_ENGINEERS_NAME", "" + OLD_ENGINEERS_NAME + "");
                                    SmtpSendMailWithCalendar("Update regarding your service request " + ticketResult.TicketId + "", tempCustMailBody_re, ticketResult.CustomerEmail, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                    Task.Delay(1000);
                                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                            }
                            if (notify.ReAllocateTicketAdmin)
                            {
                                var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                                if (adminResult != null)
                                {
                                    try
                                    {
                                        var tempAdminMailBody_Re = string.Empty;
                                        tempAdminMailBody_Re = templateResult_Re_Allocation.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                            .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                            .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                            .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                            .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                            .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                            .Replace("ENGINEER_NAME", "" + Engineer_Name + "")
                                            .Replace("OLD_ENGINEERS_NAME", "" + OLD_ENGINEERS_NAME + "")
                                            .Replace("USER_NAME", "" + adminResult.FullName + "");
                                        SmtpSendMailWithCalendar(ticketResult.TicketId + " Re-allocated to " + Engineer_Name + "", tempAdminMailBody_Re, adminResult.Email, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                        Task.Delay(1000);
                                    }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                    catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                                }
                            }
                        }
                    }
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {

                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        // Re-Allocation Ticket
        public void ReAllocationTicketBodyTemplate(List<TicketTeam> oldTeam, Guid? TicketId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                Task.Yield();
                var Engineer_Name = string.Empty;
                var OLD_ENGINEERS_NAME = string.Empty;
                var team = (from e in _context.TicketTeam where e.TicketId == TicketId select e).ToList();
                bool IsEngiChange = false;

                foreach (var m in oldTeam)
                {
                    if (team.Any(b => b.EngineerId == m.EngineerId))
                    {

                    }
                    else
                    {
                        IsEngiChange = true;
                    }
                }
                foreach (var k in team)
                {
                    if (oldTeam.Any(j => j.EngineerId == k.EngineerId))
                    {

                    }
                    else
                    {
                        IsEngiChange = true;
                    }
                }



                if (IsEngiChange == true)
                {
                    if (team != null)
                    {
                        foreach (var i in team)
                        {
                            if (i.EngineerName != "")
                            {
                                Engineer_Name = Engineer_Name + i.EngineerName + ",";
                            }
                        }
                    }

                    if (oldTeam != null)
                    {
                        foreach (var g in oldTeam)
                        {
                            if (g.EngineerName != "")
                            {
                                OLD_ENGINEERS_NAME = OLD_ENGINEERS_NAME + g.EngineerName + ",";
                            }
                        }
                    }

                    var ticketResult = (from q in _context.Ticket where q.Id == TicketId select q).FirstOrDefault();
                    var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Ticket Re-Allocation" select t).FirstOrDefault();

                    var notify = (from n in _context.Notification select n).FirstOrDefault();
                    var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (ticketResult != null && templateResult != null)
                    {
                        if (isCust)
                        {
                            try
                            {
                                var tempCustMailBody = string.Empty;
                                tempCustMailBody = templateResult.CustomerMailBody
                                    .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                    .Replace("ENGINEER_NAME", "" + Engineer_Name + "")
                                    .Replace("OLD_ENGINEERS_NAME", "" + OLD_ENGINEERS_NAME + "");
                                SmtpSendMailWithCalendar("Update regarding your service request " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                Task.Delay(1000);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                        if (notify.ReAllocateTicketEngineer)
                        {
                            try
                            {

                                foreach (var i in team)
                                {
                                    try
                                    {
                                        var tempEngMailBody = string.Empty;
                                        tempEngMailBody = templateResult.EngineerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                        .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                        .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                        .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                        .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                        .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                        .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                        .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                        .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                        .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                        .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                        var engdetails = (from s in _context.Login where s.Id == i.EngineerId select s).FirstOrDefault();
                                        SmtpSendMailWithCalendar("Re-allocated/Re-scheduled" + ticketResult.Title + "", tempEngMailBody + "", engdetails.Email.Trim(), ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                        Task.Delay(1000);
                                        var tempEngInAppNotification = string.Empty;
                                        tempEngInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                          .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                          .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                          .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                          .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                          .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                          .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                          .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                          .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                          .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                          .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                        var obj = new PushNotification(engdetails.AppToken, "Service Request", tempEngInAppNotification);
                                    }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                    catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                                }
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                        if (isAdmin)
                        {
                            var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                            if (adminResult != null)
                            {
                                try
                                {
                                    var tempAdminMailBody = string.Empty;
                                    tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                        .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                        .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                        .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                        .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                        .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                        .Replace("ENGINEER_NAME", "" + Engineer_Name + "")
                                        .Replace("OLD_ENGINEERS_NAME", "" + OLD_ENGINEERS_NAME + "")
                                        .Replace("USER_NAME", "" + adminResult.FullName + "");
                                    SmtpSendMailWithCalendar(ticketResult.TicketId + " Re-allocated to " + Engineer_Name + "", tempAdminMailBody, adminResult.Email, ticketResult.CustomerName, ticketResult.AppointmentStart, ticketResult.AppointmentEnd, ticketResult.CustomerAddress, ticketResult.Id, ticketResult.SMTPId);
                                    Task.Delay(1000);
                                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                            }
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        //Cancelled Ticket
        public void CancelledTicketBodyTemplate(Guid? TicketId, Guid? AdminId)
        {
            try
            {
                Task.Yield();
                var Engineer_Name = string.Empty;
                var ticketResult = (from q in _context.Ticket where q.Id == TicketId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Cancelled Ticket" select t).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                var team = (from e in _context.TicketTeam where e.TicketId == TicketId select e).ToList();
                if (team != null)
                {
                    foreach (var i in team)
                    {
                        if (i.EngineerName != "")
                        {
                            Engineer_Name = Engineer_Name + i.EngineerName + ",";
                        }
                    }
                }
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (ticketResult != null && templateResult != null)
                {
                    if (notify.CancelTicketCustomer)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "");
                            SmtpSendMail("Cancellation of Service Request " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                    if (adminResult != null)
                    {
                        if (notify.CancelTicketAdmin)
                        {
                            try
                            {
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("ENGINEER_NAME", "" + Engineer_Name + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "");
                                SmtpSendMail("Cancellation of Service Request " + ticketResult.Title + " for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, adminResult.Email, ticketResult.SMTPId);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                    if (notify.CancelTicketEngineer)
                    {
                        foreach (var i in team)
                        {
                            try
                            {
                                var tempEngMailBody = string.Empty;
                                tempEngMailBody = templateResult.EngineerMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                var engdetails = (from e in _context.Login where e.Id == i.EngineerId select e).FirstOrDefault();
                                SmtpSendMail("Cancellation of Task " + ticketResult.TicketId + "", tempEngMailBody, engdetails.Email, ticketResult.SMTPId);

                                var tempEngInAppNotification = string.Empty;
                                tempEngInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                  .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                  .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                  .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                  .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                  .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                  .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                  .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                  .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                  .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                  .Replace("ENGINEER_NAME", "" + Engineer_Name + "");
                                var obj = new PushNotification(engdetails.AppToken, "Cancellation", tempEngInAppNotification);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        //Start Ticket
        public void StartTicketBodyTemplate(Guid? TicketId)
        {
            try
            {
                Task.Yield();
                var ticketResult = (from q in _context.Ticket where q.Id == TicketId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Start / End Ticket" select t).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();

                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (ticketResult != null && templateResult != null)
                {
                    if (notify.StartEndTicketCustomer)
                    {
                        try
                        {
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "");
                            SmtpSendMail("Regarding your service request " + ticketResult.TicketId + " has Started ", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    var adminResult = (from u in _context.Login where u.Type == "Admin" && u.IsActive == true select u).FirstOrDefault();
                    if (adminResult != null)
                    {
                        if (notify.StartEndTicketAdmin)
                        {
                            try
                            {
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "");
                                SmtpSendMail("Regarding your service request " + ticketResult.TicketId + " started for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, genicProfile.Email, ticketResult.SMTPId);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }

        [Obsolete]
        public void CompletionTicketBodyTemplate(Guid CloserId)
        {
            try
            {
                Task.Yield();
                //Fetch TicketwiseService Form
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                var ticketResult = (from q in _context.Ticket where q.Id == ticketWiseServiceForm.TicketId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Completion of Ticket" select t).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                string filePath = GlobalParameters.TicketPath(ticketResult.TicketId, ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID);
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (ticketResult != null && templateResult != null)
                {
                    if (notify.CompletionTicketCustomer)
                    {
                        try
                        {
                            getCommonPath = filePath;
                            _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                            MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                            MailSettings.GenerateServicePDF(CloserId);
                            Task.Delay(5000);
                            SmtpSendMail("Completion regarding your service request " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                            FeedbackOnCompletion(CloserId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    var adminResult = (from u in _context.Login where u.Type == "Admin" && u.IsActive == true select u).FirstOrDefault();
                    if (adminResult != null)
                    {
                        if (notify.CompletionTicketAdmin)
                        {
                            try
                            {
                                getCommonPath = filePath;
                                _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "")
                                    .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                                MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                                MailSettings.GenerateServicePDF(CloserId);
                                Task.Delay(5000);
                                SmtpSendMail("Completion regarding your service request " + ticketResult.TicketId + " for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, genicProfile.Email, ticketResult.SMTPId);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }

                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }

        [Obsolete]
        public void HoldTicketBodyTemplate(Guid CloserId)
        {
            try
            {
                Task.Yield();
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                var ticketResult = (from q in _context.Ticket where q.Id == ticketWiseServiceForm.TicketId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Hold Ticket" select t).FirstOrDefault();
                string filePath = GlobalParameters.TicketPath(ticketResult.TicketId, ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID);
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (ticketResult != null && templateResult != null)
                {
                    if (notify.HoldTicketCustomer)
                    {
                        try
                        {
                            getCommonPath = filePath;
                            _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                            MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                            MailSettings.GenerateServicePDF(CloserId);
                            Task.Delay(5000);
                            SmtpSendMail("Hold regarding your service request " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }

                    var adminResult = (from u in _context.Login where u.Type == "Admin" && u.IsActive == true select u).FirstOrDefault();
                    if (adminResult != null)
                    {
                        if (notify.HoldTicketAdmin)
                        {
                            try
                            {
                                getCommonPath = filePath;
                                _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                    .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                    .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "")
                                    .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                                MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                                MailSettings.GenerateServicePDF(CloserId);
                                Task.Delay(5000);
                                SmtpSendMail("Hold regarding your service request " + ticketResult.TicketId + " for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, genicProfile.Email, ticketResult.SMTPId);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        #endregion End

        #region Begin Work order
        [Obsolete]
        public void WorkOrderMailBodyTemplate(Guid? CloserId, Guid AdminId)
        {
            try
            {
                Task.Yield();
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                var Engineer_Name = string.Empty;
                var ticketResult = (from q in _context.Ticket where q.Id == ticketWiseServiceForm.TicketId select q).FirstOrDefault();
                var CloserResult = (from c in _context.CloserDetails where c.TicketId == ticketWiseServiceForm.TicketId && c.EngineerId == ticketWiseServiceForm.EngineerId && c.IsReady == true select c).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Work Order" select t).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                string filePath = GlobalParameters.TicketPath(ticketResult.TicketId, ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID);
                if (CloserResult != null && templateResult != null)
                {
                    if (notify.WorkOrderCustomer)
                    {
                        try
                        {
                            getCommonPath = filePath;
                            _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                            .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                            Task.Delay(5000);
                            SmtpSendMail("Work Order Request for" + ticketResult.Title + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                        }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                        catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                    }
                    if (notify.WorkOrderAdmin)
                    {
                        var adminResult = (from u in _context.Login where u.Id == AdminId && u.IsActive == true select u).FirstOrDefault();
                        if (adminResult != null)
                        {
                            try
                            {
                                getCommonPath = filePath;
                                _name = ticketResult.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
                                var tempAdminMailBody = string.Empty;
                                tempAdminMailBody = templateResult.AdminMailBody.Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                    .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                    .Replace("CUSTOMER_COMPANY", "" + ticketResult.CustomerCompanyName + "")
                                    .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                    .Replace("USER_NAME", "" + adminResult.FullName + "")
                                    .Replace("TICKET_NETAMOUNT", "" + CloserResult.CloserTotalAmount.ToString("00.00") + "")
                                    .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                                Task.Delay(5000);
                                SmtpSendMail("Work Order Request for" + ticketResult.Title + " for " + ticketResult.CustomerCompanyName + "", tempAdminMailBody, adminResult.Email, ticketResult.SMTPId);
                            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                        }
                    }
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
        }
        #endregion Work Order

        #region Begin Invoice
        [Obsolete]
        public void emailInvoiceToClient(Invoice obj, string emailto, int smtpid, string sign)
        {
            try
            {
                string filePath = GlobalParameters.InvoicePath(obj.InvoiceId);
                getCommonPath = filePath;
                _name = obj.InvoiceId + ".pdf";
                var credentials = _context.SMTPSettings.FirstOrDefault();
                System.Text.StringBuilder sb = new System.Text.StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'><h1>Invoice</h1></td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'><h2>For Services Rendered</h2></td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Hi " + obj.CustomerName + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Thank you for your recent business with us. We have attached a detailed.</td></tr>");
                sb.Append("<tr><td colspan='3'>copy of " + obj.InvoiceId + " to this email.</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Download Invoice <a target='_blank' href='" + filePath + "' >Click here</a></td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>The invoice total is " + obj.NetAmount + ", with " + obj.ReqDepositeAmount + " to be paid by " + obj.InvoiceDueDate + ".</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>If you have any questions or concerns regarding this quote, please don't.</td></tr>");
                sb.Append("<tr><td colspan='3'>hesitate to get in touch with us at " + credentials.SMTPEmail + ".</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Sincerely</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>" + sign + "</td></tr>");
                sb.Append("</table>");
                GenerateInvoicePDF(obj.Id);
                Task.Delay(5000);
                SmtpSendMail("New Invoice | " + obj.InvoiceId, sb.ToString(), emailto, smtpid);
            }
            catch (Exception ex) { }
        }

        [Obsolete]
        public void GenerateInvoicePDF(Guid InvoiceId)
        {
            try
            {
                var _invoice = (from q in _context.Invoice where q.Id == InvoiceId select q).FirstOrDefault();
                var _customer = (from q in _context.Customer where q.Id == _invoice.CustomerId select q).FirstOrDefault();
                var _property = (from q in _context.Property where q.Id == _invoice.PropertyId select q).FirstOrDefault();
                var _invoiceitem = (from i in _context.InvoiceItem where i.InvoiceId == _invoice.Id select i).ToList();
                string m = string.Empty;
                string IsDirExist = Path.Combine(_hostingEnvironment.ContentRootPath, GlobalParameters.AWS_DRIVE);
                if (!Directory.Exists(IsDirExist))
                {
                    Directory.CreateDirectory(IsDirExist);
                }
                string filePath = Path.Combine(GlobalParameters.BaseDocFolder + "/" + _invoice.InvoiceId + ".pdf");

                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }
                catch (Exception ex) { }
                var genicprofile = (from ii in _context.GenicProfile select ii).FirstOrDefault();

                //Create Document
                var doc1 = new Document();
                doc1.AddAuthor("BT");
                doc1.AddCreator("Bthrust");
                doc1.AddKeywords(_invoice.InvoiceId.ToUpper());
                doc1.AddSubject(genicprofile.Name);
                doc1.AddTitle(genicprofile.Name);
                var streamObj = new System.IO.FileStream(filePath, System.IO.FileMode.CreateNew);
                PdfWriter.GetInstance(doc1, streamObj);
                Font font8 = new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0));
                Font font8Fade = new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(217, 217, 217));
                Font font10 = new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0));
                Font font10Bold = new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0));
                Font font9Bold = new Font(Font.FontFamily.HELVETICA, 8, Font.BOLD, new BaseColor(0, 0, 0));
                Font font20 = new Font(Font.FontFamily.HELVETICA, 20, Font.NORMAL, new BaseColor(0, 0, 0));
                doc1.Open();

                PdfPTable table = new PdfPTable(100);
                table.WidthPercentage = 100;

                Image jpg = Image.GetInstance(genicprofile.InvoiceHeader);
                jpg.ScaleToFit(520f, 50f);
                PdfPCell cellHead = new PdfPCell(jpg);
                cellHead.Colspan = 60;
                cellHead.Border = 0;
                cellHead.Padding = 0;
                cellHead.HorizontalAlignment = Element.ALIGN_RIGHT;
                cellHead.VerticalAlignment = Element.ALIGN_TOP;
                cellHead.BackgroundColor = BaseColor.WHITE;
                table.AddCell(cellHead);

                PdfPCell cellHead2 = new PdfPCell();
                cellHead2.Colspan = 40;
                cellHead2.Border = 0;
                cellHead2.Padding = 0;
                cellHead2.Phrase = new Phrase(" ", font10);
                cellHead2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(cellHead2);
                {
                    {
                        PdfPCell gap = new PdfPCell();
                        gap.Colspan = 100;
                        gap.PaddingTop = 4;
                        gap.Phrase = new Phrase(" ", font8);
                        gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        gap.Border = 0;
                        table.AddCell(gap);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 2;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase("Invoice Date", font10Bold);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 2;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 0;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 0;
                        row2.PaddingLeft = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase(((DateTime)_invoice.CreatedUtcDate).ToString("d MMM yyyy"), font10);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 0;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }

                    {
                        PdfPCell gap = new PdfPCell();
                        gap.Colspan = 100;
                        gap.PaddingTop = 2;
                        gap.Phrase = new Phrase(" ", font8);
                        gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        gap.Border = 0;
                        table.AddCell(gap);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 2;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase("Invoice Number", font10Bold);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 2;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 0;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 0;
                        row2.PaddingLeft = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase(_invoice.InvoiceId, font10);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 0;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }

                    {
                        PdfPCell gap = new PdfPCell();
                        gap.Colspan = 100;
                        gap.PaddingTop = 2;
                        gap.Phrase = new Phrase(" ", font8);
                        gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        gap.Border = 0;
                        table.AddCell(gap);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 2;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase("Reference", font10Bold);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 2;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }
                    {
                        PdfPCell row1 = new PdfPCell();
                        row1.Colspan = 50;
                        row1.Border = 0;
                        row1.Padding = 0;
                        row1.HorizontalAlignment = Element.ALIGN_LEFT;
                        row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row1.Phrase = new Phrase(" ", font10);
                        row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row1);

                        PdfPCell row2 = new PdfPCell();
                        row2.Colspan = 20;
                        row2.Border = 0;
                        row2.Padding = 0;
                        row2.PaddingLeft = 2;
                        row2.HorizontalAlignment = Element.ALIGN_LEFT;
                        row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row2.Phrase = new Phrase(_invoice.RefranceNo, font10);
                        row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row2);

                        PdfPCell row3 = new PdfPCell();
                        row3.Colspan = 30;
                        row3.Border = 0;
                        row3.Padding = 0;
                        row3.HorizontalAlignment = Element.ALIGN_LEFT;
                        row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                        row3.Phrase = new Phrase(" ", font10);
                        row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(row3);
                    }
                }
                {
                    PdfPCell row1 = new PdfPCell();
                    row1.Colspan = 70;
                    row1.Border = 0;
                    row1.Padding = 0;
                    row1.HorizontalAlignment = Element.ALIGN_LEFT;
                    row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row1.Phrase = new Phrase(" ", font10);
                    row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row1);

                    string _compnydetail = genicprofile.Name + " " + genicprofile.AddressStreet1 + " " + genicprofile.AddressStreet2 + " " + genicprofile.AddressUnitNo + " " + genicprofile.AddressCountry + " " + genicprofile.AddressZipCode + "\nTel: " + genicprofile.ContactNumber + "\nEmail: " + genicprofile.Email;
                    PdfPCell row3 = new PdfPCell();
                    row3.Colspan = 30;
                    row3.Border = 0;
                    row3.Padding = 10;
                    row3.PaddingTop = -100;
                    row3.SetLeading(6, 1);
                    row3.HorizontalAlignment = Element.ALIGN_LEFT;
                    row3.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row3.Phrase = new Phrase(_compnydetail, font10);
                    row3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row3);
                }
                {
                    PdfPCell row1 = new PdfPCell();
                    row1.Colspan = 100;
                    row1.Border = 0;
                    row1.PaddingTop = -160;
                    row1.HorizontalAlignment = Element.ALIGN_LEFT;
                    row1.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row1.Phrase = new Phrase("INVOICE", font20);
                    row1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row1);

                    string _pro = "";
                    string tempaddress = "";
                    tempaddress = _property.AddressStreet1 + " " + _property.AddressStreet2;
                    if (!string.IsNullOrEmpty(tempaddress))
                    {
                        _pro = "\n" + tempaddress;
                    }
                    tempaddress = "";
                    tempaddress = _property.AddressUnitNo;
                    if (!string.IsNullOrEmpty(tempaddress))
                    {
                        _pro += "\n" + tempaddress;
                    }
                    tempaddress = "";
                    tempaddress = _property.AddressCountry + " " + _property.AddressZipCode;
                    if (!string.IsNullOrEmpty(tempaddress))
                    {
                        _pro += "\n" + tempaddress;
                    }

                    PdfPCell row2 = new PdfPCell();
                    row2.Colspan = 100;
                    row2.Border = 0;
                    row2.PaddingTop = -100;
                    row2.PaddingLeft = 20;
                    row2.HorizontalAlignment = Element.ALIGN_LEFT;
                    row2.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row2.Phrase = new Phrase(_customer.CompanyName + _pro, font10);
                    row2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(row2);
                }
                {
                    PdfPCell gap = new PdfPCell();
                    gap.Colspan = 100;
                    gap.PaddingTop = 50;
                    gap.Phrase = new Phrase(" ", font8);
                    gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    gap.Border = 0;
                    table.AddCell(gap);
                }
                {
                    PdfPCell cell = new PdfPCell();
                    cell.Colspan = 50;
                    cell.PaddingBottom = 5;
                    cell.BorderWidthTop = cell.BorderWidthLeft = cell.BorderWidthRight = 0;
                    cell.Phrase = new Phrase("Description", font10Bold);
                    cell.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell);

                    PdfPCell cell2 = new PdfPCell();
                    cell2.Colspan = 12;
                    cell2.PaddingBottom = 5;
                    cell2.BorderWidthTop = cell2.BorderWidthLeft = cell2.BorderWidthRight = 0;
                    cell2.Phrase = new Phrase("Quantity", font10Bold);
                    cell2.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell2);

                    PdfPCell cell3 = new PdfPCell();
                    cell3.Colspan = 13;
                    cell3.PaddingBottom = 5;
                    cell3.BorderWidthTop = cell3.BorderWidthLeft = cell3.BorderWidthRight = 0;
                    cell3.Phrase = new Phrase("Unit Price", font10Bold);
                    cell3.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell3.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell3);

                    PdfPCell cell4 = new PdfPCell();
                    cell4.Colspan = 12;
                    cell4.PaddingBottom = 5;
                    cell4.BorderWidthTop = cell4.BorderWidthLeft = cell4.BorderWidthRight = 0;
                    cell4.Phrase = new Phrase("Tax", font10Bold);
                    cell4.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell4.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell4);

                    PdfPCell cell5 = new PdfPCell();
                    cell5.Colspan = 13;
                    cell5.PaddingBottom = 5;
                    cell5.BorderWidthTop = cell5.BorderWidthLeft = cell5.BorderWidthRight = 0;
                    cell5.Phrase = new Phrase("Amount SGD", font10Bold);
                    cell5.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell5.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell5.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell5);
                }
                {
                   

                    foreach (var item in _invoiceitem)
                    {
                        PdfPCell cell = new PdfPCell();
                        cell.Colspan = 50;
                        //cell.Rowspan = _invoiceitem.Count();
                        cell.Padding = 5;
                        cell.BorderWidth = 0;
                        cell.Phrase = new Phrase(item.ItemDescription, font10);
                        cell.HorizontalAlignment = Element.ALIGN_LEFT;
                        cell.VerticalAlignment = Element.ALIGN_MIDDLE;
                        cell.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(cell);

                        string _qty = item.Qty.ToString(".00");
                        if (item.Type == "Service")
                        {
                            _qty = "";
                        }
                        PdfPCell cell2 = new PdfPCell();
                        cell2.Colspan = 12;
                        cell2.Padding = 5;
                        cell2.BorderWidth = 0;
                        cell2.Phrase = new Phrase(_qty, font10);
                        cell2.HorizontalAlignment = Element.ALIGN_RIGHT;
                        cell2.VerticalAlignment = Element.ALIGN_TOP;
                        cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(cell2);

                        PdfPCell cell3 = new PdfPCell();
                        cell3.Colspan = 13;
                        cell3.Padding = 5;
                        cell3.BorderWidth = 0;
                        cell3.Phrase = new Phrase(item.UnitCost.ToString(".00"), font10);
                        cell3.HorizontalAlignment = Element.ALIGN_RIGHT;
                        cell3.VerticalAlignment = Element.ALIGN_TOP;
                        cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(cell3);

                        PdfPCell cell4 = new PdfPCell();
                        cell4.Colspan = 12;
                        cell4.Padding = 5;
                        cell4.BorderWidth = 0;
                        cell4.Phrase = new Phrase(_invoice.TaxRate.ToString(), font10);
                        cell4.HorizontalAlignment = Element.ALIGN_RIGHT;
                        cell4.VerticalAlignment = Element.ALIGN_TOP;
                        cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(cell4);

                        PdfPCell cell5 = new PdfPCell();
                        cell5.Colspan = 13;
                        cell5.Padding = 5;
                        cell5.BorderWidth = 0;
                        cell5.Phrase = new Phrase(item.Total.ToString(".00"), font10);
                        cell5.HorizontalAlignment = Element.ALIGN_RIGHT;
                        cell5.VerticalAlignment = Element.ALIGN_TOP;
                        cell5.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                        table.AddCell(cell5);
                    }
                }
                {
                    PdfPCell gap = new PdfPCell();
                    gap.Colspan = 100;
                    gap.PaddingTop = 3;
                    gap.BorderWidthBottom = gap.BorderWidthLeft = gap.BorderWidthRight = 0;
                    gap.Phrase = new Phrase(" ", font8Fade);
                    gap.BorderColor = new BaseColor(217, 217, 217);
                    gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(gap);
                }
                {
                    PdfPCell cell = new PdfPCell();
                    cell.Colspan = 50;
                    cell.PaddingBottom = 5;
                    cell.BorderWidth = 0;
                    cell.Phrase = new Phrase(" ", font10);
                    cell.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell);

                    PdfPCell cell2 = new PdfPCell();
                    cell2.Colspan = 12;
                    cell2.PaddingBottom = 5;
                    cell2.BorderWidth = 0;
                    cell2.Phrase = new Phrase(" ", font10);
                    cell2.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell2);

                    PdfPCell cell3 = new PdfPCell();
                    cell3.Colspan = 13;
                    cell3.PaddingBottom = 5;
                    cell3.BorderWidth = 0;
                    cell3.Phrase = new Phrase(" ", font10);
                    cell3.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell3.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell3);

                    PdfPCell cell4 = new PdfPCell();
                    cell4.Colspan = 12;
                    cell4.PaddingBottom = 5;
                    cell4.BorderWidth = 0;
                    cell4.Phrase = new Phrase("Subtotal", font10);
                    cell4.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell4.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell4);

                    PdfPCell cell5 = new PdfPCell();
                    cell5.Colspan = 13;
                    cell5.PaddingBottom = 5;
                    cell5.BorderWidth = 0;
                    cell5.Phrase = new Phrase(_invoice.SubTotal.ToString(".00"), font10);
                    cell5.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell5.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell5.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell5);
                }
                {
                    PdfPCell cell = new PdfPCell();
                    cell.Colspan = 50;
                    cell.PaddingBottom = 5;
                    cell.BorderWidth = 0;
                    cell.Phrase = new Phrase("", font10Bold);
                    cell.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell);

                    PdfPCell cell2 = new PdfPCell();
                    cell2.Colspan = 12;
                    cell2.PaddingBottom = 5;
                    cell2.BorderWidthBottom = cell2.BorderWidthLeft = cell2.BorderWidthRight = 0;
                    cell2.Phrase = new Phrase("", font10Bold);
                    cell2.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell2);

                    PdfPCell cell3 = new PdfPCell();
                    cell3.Colspan = 13;
                    cell3.PaddingBottom = 5;
                    cell3.BorderWidthBottom = cell3.BorderWidthLeft = cell3.BorderWidthRight = 0;
                    cell3.Phrase = new Phrase("", font10Bold);
                    cell3.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell3.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell3);

                    PdfPCell cell4 = new PdfPCell();
                    cell4.Colspan = 12;
                    cell4.PaddingBottom = 5;
                    cell4.BorderWidthBottom = cell4.BorderWidthLeft = cell4.BorderWidthRight = 0;
                    cell4.Phrase = new Phrase("TOTAL SGD", font10Bold);
                    cell4.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell4.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell4);

                    PdfPCell cell5 = new PdfPCell();
                    cell5.Colspan = 13;
                    cell5.PaddingBottom = 5;
                    cell5.BorderWidthBottom = cell5.BorderWidthLeft = cell5.BorderWidthRight = 0;
                    cell5.Phrase = new Phrase(_invoice.NetAmount.ToString(".00"), font10Bold);
                    cell5.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell5.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell5.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell5);
                }
                {
                    PdfPCell gap = new PdfPCell();
                    gap.Colspan = 100;
                    gap.PaddingTop = 25;
                    gap.Phrase = new Phrase(" ", font8);
                    gap.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    gap.Border = 0;
                    table.AddCell(gap);
                }
                {
                    PdfPCell cell1 = new PdfPCell();
                    cell1.Colspan = 100;
                    cell1.Padding = 1;
                    cell1.Border = 0;
                    cell1.Phrase = new Phrase("Due Date: " + ((DateTime)_invoice.InvoiceDueDate).ToString("d MMM yyyy"), font10Bold);
                    cell1.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell1.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell1);

                    PdfPCell cell2 = new PdfPCell();
                    cell2.Colspan = 100;
                    cell2.Padding = 1;
                    cell2.Border = 0;
                    cell2.Phrase = new Phrase("Bank Details", font10);
                    cell2.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell2.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell2);

                    PdfPCell cell5 = new PdfPCell();
                    cell5.Colspan = 100;
                    cell5.Padding = 1;
                    cell5.Border = 0;
                    cell5.Phrase = new Phrase("Bank: OCBC, A/c No: 000000000000", font10);
                    cell5.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell5.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cell5.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    table.AddCell(cell5);
                }
                doc1.Add(table);
                doc1.Close();
                try
                {
                    string end_point = GlobalParameters.AWS_FOLDER + "/Invoice/" + _invoice.InvoiceId + "/" + _invoice.InvoiceId + ".pdf";
                    Byte[] bytes = File.ReadAllBytes(Path.Combine(_hostingEnvironment.ContentRootPath, filePath));
                    string base64String = Convert.ToBase64String(bytes);
                    Task.Delay(1000);
                    AWSHelper awshelper = new AWSHelper();
                    bool isUploaded = awshelper.SendDriveToAWS(base64String, "pdf", end_point, out string msg);
                    Task.Delay(1000);
                }
                catch { }
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }
                catch (Exception) { }

            }
            catch (Exception ex)
            {

            }
        }
        #endregion End Invoice

        #region Begin Feedback
        [Obsolete]
        public void FeedbackOnCompletion(Guid CloserId)
        {
            try
            {
                Task.Yield();
                //Fetch TicketwiseService Form
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                var closerdetails = (from s in _context.CloserDetails where s.CloserID == CloserId select s).FirstOrDefault();
                var ticketResult = (from q in _context.Ticket where q.Id == ticketWiseServiceForm.TicketId select q).FirstOrDefault();
                var logindetails = (from q in _context.Login where q.Id == ticketResult.CustomerId select q).FirstOrDefault();
                var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Feedback" select t).FirstOrDefault();
                var notify = (from n in _context.Notification select n).FirstOrDefault();
                string filePath = GlobalParameters.TicketPath(ticketResult.TicketId, ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID);
                var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                if (ticketResult != null && templateResult != null)
                {
                    if (notify.CompletionTicketCustomer)
                    {
                        try
                        {
                            string tid = ticketResult.Id.ToString();
                            string token = logindetails.Token.ToString();
                            StringBuilder sb = new StringBuilder("<div style='font-size:30px;'>");
                            sb.Append("<a href='" + GlobalParameters.FSM_PLAN_URL + "/auth/customer-ticket-feedback?i=" + tid + "&r=1&t=" + token + "' target='_blank'><img src='" + GlobalParameters.FSM_PLAN_URL + "/assets/images/star.png' width='32' /></a>");
                            sb.Append("<a href='" + GlobalParameters.FSM_PLAN_URL + "/auth/customer-ticket-feedback?i=" + tid + "&r=2&t=" + token + "' target='_blank'><img src='" + GlobalParameters.FSM_PLAN_URL + "/assets/images/star.png' width='32' /></a>");
                            sb.Append("<a href='" + GlobalParameters.FSM_PLAN_URL + "/auth/customer-ticket-feedback?i=" + tid + "&r=3&t=" + token + "' target='_blank'><img src='" + GlobalParameters.FSM_PLAN_URL + "/assets/images/star.png' width='32' /></a>");
                            sb.Append("<a href='" + GlobalParameters.FSM_PLAN_URL + "/auth/customer-ticket-feedback?i=" + tid + "&r=4&t=" + token + "' target='_blank'><img src='" + GlobalParameters.FSM_PLAN_URL + "/assets/images/star.png' width='32' /></a>");
                            sb.Append("<a href='" + GlobalParameters.FSM_PLAN_URL + "/auth/customer-ticket-feedback?i=" + tid + "&r=5&t=" + token + "' target='_blank'><img src='" + GlobalParameters.FSM_PLAN_URL + "/assets/images/star.png' width='32' /></a>");
                            sb.Append("</div>");

                            var tempCustMailBody = string.Empty;
                            tempCustMailBody = templateResult.CustomerMailBody
                                .Replace("TICKET_TITLE", "" + ticketResult.Title + "")
                                .Replace("CUSTOMER_NAME", "" + ticketResult.CustomerName + "")
                                .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                .Replace("TICKET_NO", "" + ticketResult.TicketId + "")
                                .Replace("ADDRESS", "" + ticketResult.CustomerAddress + "")
                                .Replace("APPOINTMENT_DATE", "" + ticketResult.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                .Replace("APPOINTMENT_TIME", "" + ticketResult.OneOffStartTime + "")
                                .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                .Replace("ENGINEER_NAME", "" + closerdetails.ServiceBy + "")
                                .Replace("REVIEW_FEEDBACK_STAR", "" + sb + "")
                                .Replace("SERVICE_ATTACHMENT_PATH", "<a target='_blank' href='" + filePath + "' >Click here</a>");
                            MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                            MailSettings.GenerateServicePDF(CloserId);
                            Task.Delay(5000);
                            SmtpSendMail(GlobalParameters.FSM_TICKET_NAME + " Feedback for " + ticketResult.TicketId + "", tempCustMailBody, ticketResult.CustomerEmail, ticketResult.SMTPId);
                        }
                        catch (Exception ex) { }
                    }

                }
            }
            catch (Exception ex)
            {

            }
        }
        #endregion End Feedback
    }
}
