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
    public class MailSettings
    {
        private static EntityFrameworkDbContext _context;
        [Obsolete]
        private static IHostingEnvironment _hostingEnvironment;
        public static string getCommonPath = "";
        public static string _name = "";
        [Obsolete]
        public MailSettings(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        private void SmtpClientSendMail(string subject, string body, string mailto, int senderid)
        {
            var credentials = _context.SMTPSettings.Where(e => e.Id == senderid).FirstOrDefault();
            if (credentials == null)
            {
                credentials = _context.SMTPSettings.FirstOrDefault();
            }
            MailMessage mail = new MailMessage();
            mail.To.Add(new MailAddress(mailto));
            mail.Subject = subject;
            mail.Body = body;
            mail.From = new MailAddress(credentials.SMTPUsername, credentials.EmailSignature);
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
                if(mailto.Length > 0)
                {
                    client.Send(mail);
                }
                getCommonPath = "";
                _name = "";
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                getCommonPath = "";
                _name = "";
            }
            getCommonPath = "";
            _name = "";
        }

        #region Begin Ticket Rescheduled
        /// <summary>
        /// send Email to Customer when Ticket Rescheduled
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="emailto"></param>
        public void TicketRescheduledMailForCustomer(Ticket ticket, string customeremail, int senderid)
        {
            try
            {
                var credentials = _context.SMTPSettings.Where(s => s.Id == senderid).FirstOrDefault();
                var genicProfile = _context.GenicProfile.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + ticket.CustomerName + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Your ticket is Rescheduled.</td></tr>");
                sb.Append("<tr><td colspan='3'>Your new service time.</td></tr>");
                sb.Append("<tr><td>Start Time</td><td>:</td><td>" + ticket.AppointmentStart.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>End Time</td><td>:</td><td>" + ticket.AppointmentEnd.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
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

                SmtpClientSendMail("Your Ticket is Rescheduled", sb.ToString(), customeremail, senderid);
            }
            catch (Exception ex) { }
        }
        /// <summary>
        /// send Email to Engineer when Ticket Rescheduled
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="emailto"></param>
        public void TicketRescheduledMailForEngineer(string engineername, string engineeremail, Ticket ticket, int senderid)
        {
            try
            {
                var credentials = _context.SMTPSettings.Where(s => s.Id == senderid).FirstOrDefault();
                var genicProfile = _context.GenicProfile.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + engineername + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Your task is Rescheduled.</td></tr>");
                sb.Append("<tr><td colspan='3'>Your new task time is " + ticket.OneOffAppointmentDate.ToString() + "</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Task Details.</td></tr>");
                sb.Append("<tr><td>Subject</td><td>:</td><td>" + ticket.Title + "</td></tr>");
                sb.Append("<tr><td>Customer</td><td>:</td><td>" + ticket.CustomerName + "</td></tr>");
                sb.Append("<tr><td>Priority</td><td>:</td><td>" + Priority(ticket.Priority) + "</td></tr>");
                sb.Append("<tr><td>Visit Start Time</td><td>:</td><td>" + ticket.AppointmentStart.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>Visit End Time</td><td>:</td><td>" + ticket.AppointmentEnd.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>Visit Location</td><td>:</td><td>" + ticket.CustomerAddress + "</td></tr>");
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
                SmtpClientSendMail("Your Task is Rescheduled", sb.ToString(), engineeremail, senderid);
            }
            catch { }
        }
        public void TicketRescheduledMailForAdmin(Ticket ticket, int senderid)
        {
            try
            {
                var adminemail = (from c in _context.Login where c.Type == "Admin" select c.UserName).FirstOrDefault();
                var genicProfile = _context.GenicProfile.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + adminemail + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>The Customer " + ticket.CustomerName + " ticket time has been rescheduled.</td></tr>");
                sb.Append("<tr><td colspan='3'>The new service time is:</td></tr>");
                sb.Append("<tr><td>Start Time</td><td>:</td><td>" + ticket.AppointmentStart.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>End Time</td><td>:</td><td>" + ticket.AppointmentEnd.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>" + genicProfile.Name + "</td></tr>");
                sb.Append("</table>");
                SmtpClientSendMail(ticket.CustomerName + " Ticket Rescheduled", sb.ToString(), adminemail, senderid);
            }
            catch (Exception ex) { }
        }

        #endregion End Ticket

        #region Begin Ticket Reallocated
        /// <summary>
        /// send Email to Engineer when Ticket Unallocated
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="emailto"></param>
        public void TicketUnallocatedMailForEngineer(string engineername, string engineeremail, Ticket ticket, int senderid)
        {
            try
            {
                var credentials = _context.SMTPSettings.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + engineername + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Ticket Unallocated to you.</td></tr>");
                sb.Append("<tr><td>Ticket #</td><td>:</td><td>" + ticket.TicketId + "</td></tr>");
                sb.Append("<tr><td>Subject</td><td>:</td><td>" + ticket.Title + "</td></tr>");
                sb.Append("<tr><td>Customer</td><td>:</td><td>" + ticket.CustomerName + "</td></tr>");
                sb.Append("<tr><td>Visit Start Time</td><td>:</td><td>" + ticket.AppointmentStart.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>Visit End Time</td><td>:</td><td>" + ticket.AppointmentEnd.Replace('T', ' ').Replace('Z', ' ') + "</td></tr>");
                sb.Append("<tr><td>Visit Location</td><td>:</td><td>" + ticket.CustomerAddress + "</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>If you have any questions or concerns regarding this, please don't.</td></tr>");
                sb.Append("<tr><td colspan='3'>hesitate to get in touch with us at " + credentials.SMTPEmail + ".</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Sincerely</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Hypercom</td></tr>");
                sb.Append("</table>");

                SmtpClientSendMail("Your Task is Unallocated", sb.ToString(), engineeremail, senderid);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
        }
        #endregion End Ticket Reallocated

        #region OTP Send
        /// <summary>
        /// send OTP on Email
        /// </summary>
        public void SendOTPonEmail(string username, string email, string otp, int senderid)
        {
            try
            {
                var credentials = _context.SMTPSettings.Where(s => s.Id == senderid).FirstOrDefault();
                if (credentials == null)
                {
                    credentials = _context.SMTPSettings.FirstOrDefault();
                }
                var genicProfile = _context.GenicProfile.FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Dear " + username + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Your OTP is ." + otp + "</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>If you have any questions or concerns regarding this, please don't.</td></tr>");
                sb.Append("<tr><td colspan='3'>hesitate to get in touch with us at " + credentials.SMTPEmail + ".</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Sincerely</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>" + genicProfile.Name + "</td></tr>");
                sb.Append("</table>");

                SmtpClientSendMail("OTP", sb.ToString(), email, senderid)
                ;
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
        }
        #endregion OTP Send

        #region New Request
        public void NewRequestMailForCustomer(string contactperson, string title, string ticketNo, string mailto, int senderid)
        {
            try
            {
                var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var credentials = _context.SMTPSettings.Where(s => s.Id == senderid).FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>Hello " + contactperson + ",</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Thanks for assigning new job, we received your Job request for <b>" + title + "</b> & alloted ticket <b>#" + ticketNo + "</b> for it. Our admin will contact you soon to get it schedule.</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Please feel free to contact admin on " + genicprofile.ContactNumber + " for any further assistance regarding this Job request or any other query.</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>--</td></tr>");
                sb.Append("<tr><td colspan='3'>Your Sincerely</td></tr>");
                sb.Append("<tr><td colspan='3'>Admin</td></tr>");
                sb.Append("<tr><td colspan='3'>" + genicprofile.Name + "</td></tr>");
                sb.Append("</table>");

                SmtpClientSendMail("New Job request for " + title, sb.ToString(), mailto, senderid);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
        }
        public void NewRequestMailForAdmin(string companyName, string title, string ticketNo, string contactperson, int senderid)
        {
            try
            {
                var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var credentials = _context.SMTPSettings.Where(s => s.Id == senderid).FirstOrDefault();
                StringBuilder sb = new StringBuilder();
                sb.Append("<table style='font:inherit;font-size:10pt;color:#000;font-weight:500;width:500px;'>");
                sb.Append("<tr><td colspan='3'>Hello Admin,</td></tr>");
                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>Received new Job request from <b>" + companyName + "</b> for <b>" + title + "</b> & alloted ticket <b>#" + ticketNo + "</b> for it. Please contact <b>" + contactperson + "</b> soon to get it schedule.</td></tr>");

                sb.Append("<tr><td colspan='3'>&nbsp;</td></tr>");
                sb.Append("<tr><td colspan='3'>--</td></tr>");
                sb.Append("<tr><td colspan='3'>" + genicprofile.Name + "</td></tr>");
                sb.Append("</table>");

                SmtpClientSendMail("New Job request for " + title + " from " + companyName, sb.ToString(), genicprofile.Email, senderid);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
        }
        #endregion

        #region Begin Service PDF
        [Obsolete]
        public static void GenerateServicePDF(Guid CloserId)
        {
            try
            {
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                var ticket = (from i in _context.Ticket where i.Id == ticketWiseServiceForm.TicketId select i).FirstOrDefault();
                var customer = (from i in _context.Customer where i.Id == ticket.CustomerId select i).FirstOrDefault();
                string dynamiccustomername = string.Empty;
                if (customer.UseCompanyNameAsPrimaryName) { dynamiccustomername = ticket.CustomerCompanyName; } else { dynamiccustomername = ticket.CustomerName; }
                var closerDetails = (from c in _context.CloserDetails where c.CloserID == CloserId select c).FirstOrDefault();
                var CloserAttachment = new List<CloserAttachment>();
                if (closerDetails != null)
                {
                    CloserAttachment = (from i in _context.CloserAttachment where i.CloserID == closerDetails.CloserID select i).ToList();
                }
                var ServiceFormValue = (from f in _context.FSMServiceForm where f.CloserId == CloserId select f).FirstOrDefault();
                var genicprofile = (from ii in _context.GenicProfile select ii).FirstOrDefault();
                string IsDirExist = Path.Combine(GlobalParameters.AWS_DRIVE);
                if (!Directory.Exists(IsDirExist))
                {
                    Directory.CreateDirectory(IsDirExist);
                }

                string filePath = Path.Combine(GlobalParameters.AWS_DRIVE + "/" + ticket.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf");
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                    }
                }
                catch (Exception) { }

                var doc1 = new Document();
                doc1.AddAuthor("BT");
                doc1.AddCreator("BThrust");
                doc1.AddKeywords("SERVICE REPORT");
                doc1.AddSubject(genicprofile.Name);
                doc1.AddTitle(genicprofile.Name);
                var streamObj = new System.IO.FileStream(filePath, System.IO.FileMode.CreateNew);
                PdfWriter.GetInstance(doc1, streamObj);
                doc1.Open();
                PdfPTable table = new PdfPTable(100);
                table.WidthPercentage = 100;

                Image jpg = Image.GetInstance(genicprofile.ServiceHeader);
                jpg.ScaleToFit(530f, 120f);
                PdfPCell cellHead = new PdfPCell(jpg);
                cellHead.Colspan = 100;
                cellHead.Border = 0;
                cellHead.PaddingLeft = 0;
                cellHead.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHead.VerticalAlignment = Element.ALIGN_TOP;
                cellHead.BackgroundColor = BaseColor.WHITE;
                table.AddCell(cellHead);

                PdfPCell row0 = new PdfPCell();
                row0.Colspan = 100;
                row0.Border = 0;
                row0.Padding = 0;
                row0.HorizontalAlignment = Element.ALIGN_CENTER;
                row0.VerticalAlignment = Element.ALIGN_TOP;
                row0.PaddingTop = -15;
                row0.Phrase = new Phrase("_______________________________________________", new Font(Font.FontFamily.HELVETICA, 20, Font.BOLD, new BaseColor(0, 0, 0)));
                row0.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                table.AddCell(row0);
               
                PdfPCell row9 = new PdfPCell();
                row9.Colspan = 100;
                row9.Border = 0;
                row9.PaddingBottom = 20;
                row9.HorizontalAlignment = Element.ALIGN_CENTER;
                row9.VerticalAlignment = Element.ALIGN_MIDDLE;
                row9.PaddingTop = 10;
                row9.Phrase = new Phrase("Work Order", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0)));
                row9.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row9.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row9);

                PdfPCell row93 = new PdfPCell();
                row93.Colspan = 100;
                row93.Border = 0;
                row93.PaddingTop = -30;
                row93.HorizontalAlignment = Element.ALIGN_RIGHT;
                row93.VerticalAlignment = Element.ALIGN_MIDDLE;
                row93.PaddingRight = 30;
                row93.Phrase = new Phrase(ticket.TicketId, new Font(Font.FontFamily.HELVETICA, 11, Font.NORMAL, new BaseColor(0, 0, 0)));
                row93.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row93.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row93);

                PdfPCell row10col1 = new PdfPCell();
                row10col1.Colspan = 20;
                row10col1.Border = 0;
                row10col1.PaddingTop = 0;
                row10col1.PaddingRight = 5;
                row10col1.PaddingBottom = 5;
                row10col1.PaddingLeft = 0;
                row10col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col1.Phrase = new Phrase("Customer Name:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row10col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col1);

                PdfPCell row10col2 = new PdfPCell();
                row10col2.Colspan = 45;
                row10col2.Border = 0;
                row10col2.PaddingTop = 0;
                row10col2.PaddingRight = 5;
                row10col2.PaddingBottom = 5;
                row10col2.PaddingLeft = 0;
                row10col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col2.Phrase = new Phrase(dynamiccustomername, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col2);

                PdfPCell row10col3 = new PdfPCell();
                row10col3.Colspan = 15;
                row10col3.Border = 0;
                row10col3.PaddingTop = 0;
                row10col3.PaddingRight = 5;
                row10col3.PaddingBottom = 5;
                row10col3.PaddingLeft = 0;
                row10col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col3.Phrase = new Phrase("Date:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row10col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col3);

                PdfPCell row10col4 = new PdfPCell();
                row10col4.Colspan = 20;
                row10col4.Border = 0;
                row10col4.PaddingTop = 0;
                row10col4.PaddingRight = 5;
                row10col4.PaddingBottom = 5;
                row10col4.PaddingLeft = 0;
                row10col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row10col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row10col4.Phrase = new Phrase(closerDetails.EndDate.Value.Date.ToString("dd-MM-yyyy"), new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row10col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row10col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row10col4);

                PdfPCell row11col1 = new PdfPCell();
                row11col1.Colspan = 20;
                row11col1.Border = 0;
                row11col1.PaddingTop = 0;
                row11col1.PaddingRight = 5;
                row11col1.PaddingBottom = 5;
                row11col1.PaddingLeft = 0;
                row11col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col1.Phrase = new Phrase("Address:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row11col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col1);

                PdfPCell row11col2 = new PdfPCell();
                row11col2.Colspan = 45;
                row11col2.Border = 0;
                row11col2.PaddingTop = 0;
                row11col2.PaddingRight = 20;
                row11col2.PaddingBottom = 5;
                row11col2.PaddingLeft = 0;
                row11col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col2.Phrase = new Phrase(ticket.CustomerAddress, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row11col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col2);

                PdfPCell row11col3 = new PdfPCell();
                row11col3.Colspan = 15;
                row11col3.Border = 0;
                row11col3.PaddingTop = 0;
                row11col3.PaddingRight = 5;
                row11col3.PaddingBottom = 5;
                row11col3.PaddingLeft = 0;
                row11col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row11col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row11col3.Phrase = new Phrase("Service By:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row11col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row11col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row11col3);

                PdfPCell row12col1 = new PdfPCell();
                row12col1.Colspan = 20;
                row12col1.Border = 0;
                row12col1.PaddingTop = 0;
                row12col1.PaddingRight = 5;
                row12col1.PaddingBottom = 5;
                row12col1.PaddingLeft = 0;
                row12col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row12col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row12col1.Phrase = new Phrase(closerDetails.ServiceBy, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row12col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row12col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row12col1);

                PdfPCell row12col2 = new PdfPCell();
                row12col2.Colspan = 20;
                row12col2.Border = 0;
                row12col2.PaddingTop = 0;
                row12col2.PaddingRight = 5;
                row12col2.PaddingBottom = 5;
                row12col2.PaddingLeft = 0;
                row12col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row12col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row12col2.Phrase = new Phrase("Work Order:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row12col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row12col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row12col2);

                PdfPCell row12col3 = new PdfPCell();
                row12col3.Colspan = 45;
                row12col3.Border = 0;
                row12col3.PaddingTop = 0;
                row12col3.PaddingRight = 5;
                row12col3.PaddingBottom = 5;
                row12col3.PaddingLeft = 0;
                row12col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row12col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row12col3.Phrase = new Phrase(ticketWiseServiceForm.SerialNo.ToString("00000"), new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row12col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row12col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row12col3);

                PdfPCell row13col1 = new PdfPCell();
                row13col1.Colspan = 15;
                row13col1.Border = 0;
                row13col1.PaddingTop = 0;
                row13col1.PaddingRight = 5;
                row13col1.PaddingBottom = 5;
                row13col1.PaddingLeft = 0;
                row13col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col1.Phrase = new Phrase("Time In:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row13col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col1);

                PdfPCell row13col2 = new PdfPCell();
                row13col2.Colspan = 20;
                row13col2.Border = 0;
                row13col2.PaddingTop = 0;
                row13col2.PaddingRight = 5;
                row13col2.PaddingBottom = 5;
                row13col2.PaddingLeft = 0;
                row13col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col2.Phrase = new Phrase(closerDetails.StartTime, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col2);

                PdfPCell row13col3 = new PdfPCell();
                row13col3.Colspan = 20;
                row13col3.Border = 0;
                row13col3.PaddingTop = 0;
                row13col3.PaddingRight = 5;
                row13col3.PaddingBottom = 5;
                row13col3.PaddingLeft = 0;
                row13col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col3.Phrase = new Phrase("Email:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row13col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col3);

                if (!customer.PrintEmailOnWorkOuder) { ticket.CustomerEmail = ""; }
                PdfPCell row13col4 = new PdfPCell();
                row13col4.Colspan = 45;
                row13col4.Border = 0;
                row13col4.PaddingTop = 0;
                row13col4.PaddingRight = 5;
                row13col4.PaddingBottom = 5;
                row13col4.PaddingLeft = 0;
                row13col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row13col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row13col4.Phrase = new Phrase(ticket.CustomerEmail, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row13col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row13col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row13col4);

                PdfPCell row14col1 = new PdfPCell();
                row14col1.Colspan = 15;
                row14col1.Border = 0;
                row14col1.PaddingTop = 0;
                row14col1.PaddingRight = 5;
                row14col1.PaddingBottom = 5;
                row14col1.PaddingLeft = 0;
                row14col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col1.Phrase = new Phrase("Time Out:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row14col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col1);

                PdfPCell row14col2 = new PdfPCell();
                row14col2.Colspan = 20;
                row14col2.Border = 0;
                row14col2.PaddingTop = 0;
                row14col2.PaddingRight = 5;
                row14col2.PaddingBottom = 5;
                row14col2.PaddingLeft = 0;
                row14col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col2.Phrase = new Phrase(closerDetails.EndTime, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col2);

                PdfPCell row14col3 = new PdfPCell();
                row14col3.Colspan = 20;
                row14col3.Border = 0;
                row14col3.PaddingTop = 0;
                row14col3.PaddingRight = 5;
                row14col3.PaddingBottom = 5;
                row14col3.PaddingLeft = 0;
                row14col3.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col3.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col3.Phrase = new Phrase("ATTN:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row14col3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col3.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col3);

                PdfPCell row14col4 = new PdfPCell();
                row14col4.Colspan = 45;
                row14col4.Border = 0;
                row14col4.PaddingTop = 0;
                row14col4.PaddingRight = 5;
                row14col4.PaddingBottom = 5;
                row14col4.PaddingLeft = 0;
                row14col4.HorizontalAlignment = Element.ALIGN_LEFT;
                row14col4.VerticalAlignment = Element.ALIGN_MIDDLE;
                row14col4.Phrase = new Phrase(closerDetails.attentionName, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row14col4.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row14col4.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row14col4);

                PdfPCell row15col1 = new PdfPCell();
                row15col1.Colspan = 15;
                row15col1.Border = 0;
                row15col1.PaddingTop = 0;
                row15col1.PaddingRight = 5;
                row15col1.PaddingBottom = 5;
                row15col1.PaddingLeft = 0;
                row15col1.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col1.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col1.Phrase = new Phrase("Telephone:", new Font(Font.FontFamily.HELVETICA, 10, Font.BOLD, new BaseColor(0, 0, 0)));
                row15col1.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col1.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row15col1);

                PdfPCell row15col2 = new PdfPCell();
                row15col2.Colspan = 20;
                row15col2.Border = 0;
                row15col2.PaddingTop = 0;
                row15col2.PaddingRight = 5;
                row15col2.PaddingBottom = 5;
                row15col2.PaddingLeft = 0;
                row15col2.HorizontalAlignment = Element.ALIGN_LEFT;
                row15col2.VerticalAlignment = Element.ALIGN_MIDDLE;
                row15col2.Phrase = new Phrase(ticket.CustomerContactNo, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                row15col2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row15col2.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row15col2);

                {
                    //create header image
                    string HeaderPath1c1 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                    Image jpg12 = Image.GetInstance(HeaderPath1c1);
                    jpg12.ScaleToFit(10f, 10f);
                    PdfPCell cellHead12 = new PdfPCell(jpg12);
                    cellHead12.Colspan = 2;
                    cellHead12.Border = 0;
                    cellHead12.PaddingTop = 10;
                    cellHead12.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellHead12.VerticalAlignment = Element.ALIGN_BOTTOM;
                    cellHead12.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(cellHead12);

                    PdfPCell row16col221 = new PdfPCell();
                    row16col221.Colspan = 63;
                    row16col221.Border = 0;
                    row16col221.PaddingTop = 10;
                    row16col221.HorizontalAlignment = Element.ALIGN_LEFT;
                    row16col221.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row16col221.Phrase = new Phrase(ServiceFormValue.SelectOne, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0)));
                    row16col221.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    row16col221.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(row16col221);
                }

                PdfPCell row16col221c7 = new PdfPCell();
                row16col221c7.Colspan = 20;
                row16col221c7.Border = 0;
                row16col221c7.Padding = 0;
                row16col221c7.HorizontalAlignment = Element.ALIGN_LEFT;
                row16col221c7.VerticalAlignment = Element.ALIGN_MIDDLE;
                row16col221c7.PaddingTop = 10;
                row16col221c7.Phrase = new Phrase("Maintenance Contract:", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0)));
                row16col221c7.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row16col221c7.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row16col221c7);

                {
                    string HeaderPath1c115 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                    Image jpg12c115 = Image.GetInstance(HeaderPath1c115);
                    jpg12c115.ScaleToFit(10f, 10f);
                    PdfPCell cellHead12c151 = new PdfPCell(jpg12c115);
                    cellHead12c151.Colspan = 2;
                    cellHead12c151.Border = 0;
                    cellHead12c151.PaddingTop = 10;
                    cellHead12c151.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellHead12c151.VerticalAlignment = Element.ALIGN_BOTTOM;
                    cellHead12c151.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(cellHead12c151);

                    PdfPCell row16col221c16 = new PdfPCell();
                    row16col221c16.Colspan = 13;
                    row16col221c16.Border = 0;
                    row16col221c16.HorizontalAlignment = Element.ALIGN_LEFT;
                    row16col221c16.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row16col221c16.PaddingTop = 10;
                    row16col221c16.Phrase = new Phrase(ServiceFormValue.MaintenanceContract, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0)));
                    row16col221c16.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    row16col221c16.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(row16col221c16);
                }

                PdfPCell row16col221c162 = new PdfPCell();
                row16col221c162.Colspan = 100;
                row16col221c162.Border = 0;
                row16col221c162.HorizontalAlignment = Element.ALIGN_LEFT;
                row16col221c162.VerticalAlignment = Element.ALIGN_MIDDLE;
                row16col221c162.PaddingTop = 4;
                row16col221c162.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0)));
                row16col221c162.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row16col221c162.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row16col221c162);


                int tabelpad = 4;

                PdfPCell cellDescriptionHeader = new PdfPCell(new Phrase("Work Description", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellDescriptionHeader.Colspan = 80;
                cellDescriptionHeader.PaddingTop = 5;
                cellDescriptionHeader.PaddingRight = 5;
                cellDescriptionHeader.PaddingBottom = 8;
                cellDescriptionHeader.PaddingLeft = 5;
                cellDescriptionHeader.HorizontalAlignment = 1;
                table.AddCell(cellDescriptionHeader);

                PdfPCell cellAmountHeader = new PdfPCell(new Phrase("Amount S$", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellAmountHeader.Colspan = 20;
                cellAmountHeader.PaddingTop = 5;
                cellAmountHeader.PaddingRight = 5;
                cellAmountHeader.PaddingBottom = 8;
                cellAmountHeader.PaddingLeft = 5;
                cellAmountHeader.HorizontalAlignment = 1;
                table.AddCell(cellAmountHeader);

                // Request section
                PdfPCell cellRequestName = new PdfPCell(new Phrase("Request / Fault Reported", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellRequestName.Colspan = 30;
                cellRequestName.PaddingTop = 5;
                cellRequestName.PaddingRight = 5;
                cellRequestName.PaddingBottom = 8;
                cellRequestName.PaddingLeft = 5;
                cellRequestName.HorizontalAlignment = 0;
                table.AddCell(cellRequestName);

                PdfPCell cellRequestBlank = new PdfPCell(new Phrase(""));
                cellRequestBlank.Colspan = 50;
                cellRequestBlank.BorderWidthBottom = 0;
                cellRequestBlank.HorizontalAlignment = 0;
                table.AddCell(cellRequestBlank);

                PdfPCell cellRospan13 = new PdfPCell(new Phrase("$" + closerDetails.CloserAmount.ToString(".00") + "", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellRospan13.Colspan = 20;
                cellRospan13.Rowspan = 7;
                cellRospan13.PaddingTop = 5;
                cellRospan13.PaddingRight = 5;
                cellRospan13.PaddingBottom = 8;
                cellRospan13.PaddingLeft = 5;
                cellRospan13.HorizontalAlignment = 1;
                table.AddCell(cellRospan13);

                if (!string.IsNullOrEmpty(ServiceFormValue.Request))
                {
                    string RequestValues = ServiceFormValue.Request;
                    PdfPCell cellDiagnoseNameValue62 = new PdfPCell(new Phrase(RequestValues, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellDiagnoseNameValue62.Colspan = 80;
                    cellDiagnoseNameValue62.PaddingTop = 5;
                    cellDiagnoseNameValue62.PaddingRight = 5;
                    cellDiagnoseNameValue62.PaddingBottom = 8;
                    cellDiagnoseNameValue62.PaddingLeft = 5;
                    cellDiagnoseNameValue62.HorizontalAlignment = 0;
                    table.AddCell(cellDiagnoseNameValue62);
                }
                
                // Diaglonse / fault section
                PdfPCell cellDiagnoseName = new PdfPCell(new Phrase("Diagnose / Fault Found", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellDiagnoseName.Colspan = 30;
                cellDiagnoseName.PaddingTop = 5;
                cellDiagnoseName.PaddingRight = 5;
                cellDiagnoseName.PaddingBottom = 8;
                cellDiagnoseName.PaddingLeft = 5;
                cellDiagnoseName.HorizontalAlignment = 0;
                table.AddCell(cellDiagnoseName);

                PdfPCell cellDiagnoseNameValue1 = new PdfPCell(new Phrase("     ", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellDiagnoseNameValue1.Colspan = 50;
                cellDiagnoseNameValue1.PaddingTop = 5;
                cellDiagnoseNameValue1.PaddingRight = 5;
                cellDiagnoseNameValue1.PaddingBottom = 8;
                cellDiagnoseNameValue1.PaddingLeft = 5;
                cellDiagnoseNameValue1.BorderWidthBottom = 0;
                cellDiagnoseNameValue1.Border = 0;
                cellDiagnoseNameValue1.HorizontalAlignment = 0;
                table.AddCell(cellDiagnoseNameValue1);

                if (!string.IsNullOrEmpty(ServiceFormValue.Diagnose))
                {
                    string DiagnoseValues = ServiceFormValue.Diagnose;
                    PdfPCell cellDiagnoseNameValue22 = new PdfPCell(new Phrase(DiagnoseValues, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellDiagnoseNameValue22.Colspan = 80;
                    cellDiagnoseNameValue22.PaddingTop = 5;
                    cellDiagnoseNameValue22.PaddingRight = 5;
                    cellDiagnoseNameValue22.PaddingBottom = 8;
                    cellDiagnoseNameValue22.PaddingLeft = 5;
                    cellDiagnoseNameValue22.HorizontalAlignment = 0;
                    table.AddCell(cellDiagnoseNameValue22);
                }


                // Job done / Fault Rectified
                PdfPCell cellJobName = new PdfPCell(new Phrase("Job done / Fault Rectified", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellJobName.Colspan = 30;
                cellJobName.PaddingTop = 5;
                cellJobName.PaddingRight = 5;
                cellJobName.PaddingBottom = 8;
                cellJobName.PaddingLeft = 5;
                cellJobName.HorizontalAlignment = 0;
                table.AddCell(cellJobName);

                PdfPCell cellJobNameValue1 = new PdfPCell(new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellJobNameValue1.Colspan = 50;
                cellJobNameValue1.PaddingTop = 5;
                cellJobNameValue1.PaddingRight = 5;
                cellJobNameValue1.PaddingBottom = 8;
                cellJobNameValue1.PaddingLeft = 5;
                cellJobNameValue1.BorderWidthBottom = 0;
                cellJobNameValue1.HorizontalAlignment = 0;
                table.AddCell(cellJobNameValue1);

                if (!string.IsNullOrEmpty(ServiceFormValue.JobDone))
                {
                    string JobValues = ServiceFormValue.JobDone;
                    PdfPCell cellJobNameValue2 = new PdfPCell(new Phrase(JobValues, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellJobNameValue2.Colspan = 80;
                    cellJobNameValue2.PaddingTop = 5;
                    cellJobNameValue2.PaddingRight = 5;
                    cellJobNameValue2.PaddingBottom = 8;
                    cellJobNameValue2.PaddingLeft = 5;
                    cellJobNameValue2.HorizontalAlignment = 0;
                    table.AddCell(cellJobNameValue2);
                }

                PdfPCell cellTestingName = new PdfPCell(new Phrase("Tested with Client", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellTestingName.Colspan = 18;
                cellTestingName.PaddingTop = 5;
                cellTestingName.PaddingRight = 5;
                cellTestingName.PaddingBottom = 8;
                cellTestingName.PaddingLeft = 5;
                cellTestingName.BorderWidthRight = 0;
                cellTestingName.HorizontalAlignment = 0;
                table.AddCell(cellTestingName);

                if (closerDetails.IsTested == true)
                {
                    string cellRequest1Name8 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                    Image jpgcellRequest1Name8 = Image.GetInstance(cellRequest1Name8);
                    jpgcellRequest1Name8.ScaleToFit(10f, 10f);
                    PdfPCell cellHead1jpgcellRequest1Name8 = new PdfPCell(jpgcellRequest1Name8);
                    cellHead1jpgcellRequest1Name8.Colspan = 3;
                    cellHead1jpgcellRequest1Name8.Border = 0;
                    cellHead1jpgcellRequest1Name8.PaddingTop = 5;
                    cellHead1jpgcellRequest1Name8.PaddingRight = 5;
                    cellHead1jpgcellRequest1Name8.PaddingBottom = 8;
                    cellHead1jpgcellRequest1Name8.PaddingLeft = 0;
                    cellHead1jpgcellRequest1Name8.BorderWidthRight = 0;
                    cellHead1jpgcellRequest1Name8.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cellHead1jpgcellRequest1Name8.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cellHead1jpgcellRequest1Name8.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(cellHead1jpgcellRequest1Name8);

                    PdfPCell cellTestingNameValue = new PdfPCell(new Phrase("Yes", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellTestingNameValue.Colspan = 21;
                    cellTestingNameValue.BackgroundColor = BaseColor.WHITE;
                    cellTestingNameValue.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellTestingNameValue.Border = 0;
                    cellTestingNameValue.PaddingTop = 5;
                    cellTestingNameValue.PaddingRight = 5;
                    cellTestingNameValue.PaddingBottom = 8;
                    cellTestingNameValue.PaddingLeft = 0;
                    cellTestingNameValue.HorizontalAlignment = 0;
                    table.AddCell(cellTestingNameValue);
                }
                else
                {
                    string cellRequest1Name9 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                    Image jpgcellRequest1Name9 = Image.GetInstance(cellRequest1Name9);
                    jpgcellRequest1Name9.ScaleToFit(10f, 10f);
                    PdfPCell cellHead1jpgcellRequest1Name9 = new PdfPCell(jpgcellRequest1Name9);
                    cellHead1jpgcellRequest1Name9.Colspan = 3;
                    cellHead1jpgcellRequest1Name9.Border = 0;
                    cellHead1jpgcellRequest1Name9.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cellHead1jpgcellRequest1Name9.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cellHead1jpgcellRequest1Name9.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(cellHead1jpgcellRequest1Name9);

                    PdfPCell cellTestingNameValue2 = new PdfPCell(new Phrase("No", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellTestingNameValue2.Colspan = 21;
                    cellTestingNameValue2.BackgroundColor = BaseColor.WHITE;
                    cellTestingNameValue2.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellTestingNameValue2.Border = 0;
                    cellTestingNameValue2.Padding = tabelpad;
                    cellTestingNameValue2.HorizontalAlignment = 0;
                    table.AddCell(cellTestingNameValue2);
                }

                //Checked by section
                PdfPCell cellCheckedName = new PdfPCell(new Phrase("Checked by:", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellCheckedName.Colspan = 20;
                cellCheckedName.Border = 0;
                cellCheckedName.PaddingTop = 5;
                cellCheckedName.PaddingRight = 5;
                cellCheckedName.PaddingBottom = 8;
                cellCheckedName.PaddingLeft = 0;
                cellCheckedName.HorizontalAlignment = 2;
                table.AddCell(cellCheckedName);

                PdfPCell cellCheckedNameValue = new PdfPCell(new Phrase(closerDetails.CheckedBy, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellCheckedNameValue.Colspan = 20;
                cellCheckedNameValue.BackgroundColor = BaseColor.WHITE;
                cellCheckedNameValue.Border = 0;
                cellCheckedNameValue.PaddingTop = 5;
                cellCheckedNameValue.PaddingRight = 5;
                cellCheckedNameValue.PaddingBottom = 8;
                cellCheckedNameValue.PaddingLeft = 0;
                cellCheckedNameValue.HorizontalAlignment = 0;
                table.AddCell(cellCheckedNameValue);

                string requestAndRemarks = "";
                if (!string.IsNullOrEmpty(ServiceFormValue.Remark))
                {
                    requestAndRemarks = ServiceFormValue.Remark;
                }

                PdfPCell cellRemarksName = new PdfPCell(new Phrase("Remarks / Requests: " + requestAndRemarks + " ", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellRemarksName.Colspan = 60;
                cellRemarksName.Rowspan = 4;
                cellRemarksName.PaddingTop = 5;
                cellRemarksName.PaddingRight = 5;
                cellRemarksName.PaddingBottom = 8;
                cellRemarksName.PaddingLeft = 5;
                cellRemarksName.HorizontalAlignment = 0;
                table.AddCell(cellRemarksName);

                PdfPCell cellGSTName = new PdfPCell(new Phrase("GST(7%)", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellGSTName.Colspan = 20;
                cellGSTName.PaddingTop = 5;
                cellGSTName.PaddingRight = 5;
                cellGSTName.PaddingBottom = 8;
                cellGSTName.PaddingLeft = 5;
                cellGSTName.HorizontalAlignment = 0;
                table.AddCell(cellGSTName);

                var calGST = closerDetails.CloserTotalAmount - closerDetails.CloserAmount;
                PdfPCell cellGSTNameValue = new PdfPCell(new Phrase("$" + calGST.ToString(".00") + "", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellGSTNameValue.Colspan = 20;
                cellGSTNameValue.PaddingTop = 5;
                cellGSTNameValue.PaddingRight = 5;
                cellGSTNameValue.PaddingBottom = 8;
                cellGSTNameValue.PaddingLeft = 5;
                cellGSTNameValue.HorizontalAlignment = Element.ALIGN_CENTER;
                table.AddCell(cellGSTNameValue);


                PdfPCell cellTotalAmount = new PdfPCell(new Phrase("Total Amount", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellTotalAmount.Colspan = 20;
                cellTotalAmount.PaddingTop = 5;
                cellTotalAmount.PaddingRight = 5;
                cellTotalAmount.PaddingBottom = 8;
                cellTotalAmount.PaddingLeft = 5;
                cellTotalAmount.HorizontalAlignment = 0;
                table.AddCell(cellTotalAmount);

                PdfPCell cellTotalAmountValue = new PdfPCell(new Phrase("$" + closerDetails.CloserTotalAmount.ToString(".00") + "", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellTotalAmountValue.Colspan = 20;
                cellTotalAmountValue.PaddingTop = 5;
                cellTotalAmountValue.PaddingRight = 5;
                cellTotalAmountValue.PaddingBottom = 8;
                cellTotalAmountValue.PaddingLeft = 5;
                cellTotalAmountValue.HorizontalAlignment = Element.ALIGN_CENTER;
                table.AddCell(cellTotalAmountValue);

                //Total Amount paid section
                PdfPCell cellTotalAmountPaid = new PdfPCell(new Phrase("Paid Amount", new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellTotalAmountPaid.Colspan = 20;
                cellTotalAmountPaid.PaddingTop = 5;
                cellTotalAmountPaid.PaddingRight = 5;
                cellTotalAmountPaid.PaddingBottom = 8;
                cellTotalAmountPaid.PaddingLeft = 5;
                cellTotalAmountPaid.HorizontalAlignment = 0; 
                table.AddCell(cellTotalAmountPaid);

                PdfPCell cellTotalAmountValuePaid = new PdfPCell(new Phrase("$" + closerDetails.AmountPaid.ToString(".00") + "", new Font(Font.FontFamily.HELVETICA, 9, Font.BOLD, new BaseColor(0, 0, 0))));
                cellTotalAmountValuePaid.Colspan = 20;
                cellTotalAmountValuePaid.PaddingTop = 5;
                cellTotalAmountValuePaid.PaddingRight = 5;
                cellTotalAmountValuePaid.PaddingBottom = 8;
                cellTotalAmountValuePaid.PaddingLeft = 5;
                cellTotalAmountValuePaid.HorizontalAlignment = Element.ALIGN_CENTER;
                table.AddCell(cellTotalAmountValuePaid);

                string cellRequest1Name11 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                if(string.IsNullOrEmpty(closerDetails.PaymentMode))
                {
                    if(closerDetails.PaymentMode.ToLower() != "selectmode")
                    {
                        cellRequest1Name11 = _hostingEnvironment.WebRootPath + "\\assets\\images\\unchecked.png";
                    }
                }
                Image jpgcellRequest1Name11 = Image.GetInstance(cellRequest1Name11);
                jpgcellRequest1Name11.ScaleToFit(10f, 10f);
                PdfPCell cellHead1jpgcellRequest1Name11 = new PdfPCell(jpgcellRequest1Name11);
                cellHead1jpgcellRequest1Name11.Colspan = 2;
                cellHead1jpgcellRequest1Name11.PaddingTop = 5;
                cellHead1jpgcellRequest1Name11.PaddingRight = 5;
                cellHead1jpgcellRequest1Name11.PaddingBottom = 8;
                cellHead1jpgcellRequest1Name11.PaddingLeft = 5;
                cellHead1jpgcellRequest1Name11.BorderWidthLeft = 0;
                cellHead1jpgcellRequest1Name11.BorderWidthRight = 0;
                cellHead1jpgcellRequest1Name11.HorizontalAlignment = Element.ALIGN_RIGHT;
                cellHead1jpgcellRequest1Name11.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHead1jpgcellRequest1Name11.BackgroundColor = BaseColor.WHITE;
                table.AddCell(cellHead1jpgcellRequest1Name11);

                var paymentDesc = closerDetails.PaymentRemarks;
                if (paymentDesc != "")
                {
                    paymentDesc = " :-" + paymentDesc;
                }
                PdfPCell cellPaymentCOllectedNameValue2 = new PdfPCell(new Phrase(closerDetails.PaymentMode + paymentDesc, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                cellPaymentCOllectedNameValue2.Colspan = 38;
                cellPaymentCOllectedNameValue2.BorderWidthLeft = 0;
                cellPaymentCOllectedNameValue2.PaddingTop = 5;
                cellPaymentCOllectedNameValue2.PaddingRight = 5;
                cellPaymentCOllectedNameValue2.PaddingBottom = 8;
                cellPaymentCOllectedNameValue2.PaddingLeft = 8;
                cellPaymentCOllectedNameValue2.HorizontalAlignment = 0;
                table.AddCell(cellPaymentCOllectedNameValue2);

                PdfPCell row17col500 = new PdfPCell();
                row17col500.Colspan = 100;
                row17col500.Border = 0;
                row17col500.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col500.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col500.Padding = -4;
                row17col500.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col500.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col500.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col500);

                {
                    string cellRequest1Name112 = _hostingEnvironment.WebRootPath + "\\assets\\images\\checked.png";
                    Image jpgcellRequest1Name112 = Image.GetInstance(cellRequest1Name112);
                    jpgcellRequest1Name112.ScaleToFit(10f, 10f);
                    PdfPCell cellHead1jpgcellRequest1Name112 = new PdfPCell(jpgcellRequest1Name112);
                    cellHead1jpgcellRequest1Name112.Colspan = 2;
                    cellHead1jpgcellRequest1Name112.PaddingLeft = 2;
                    cellHead1jpgcellRequest1Name112.PaddingTop = 10;
                    cellHead1jpgcellRequest1Name112.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellHead1jpgcellRequest1Name112.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cellHead1jpgcellRequest1Name112.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    cellHead1jpgcellRequest1Name112.BackgroundColor = BaseColor.WHITE;
                    cellHead1jpgcellRequest1Name112.Border = 0;
                    table.AddCell(cellHead1jpgcellRequest1Name112);

                    PdfPCell row17col4138 = new PdfPCell();
                    row17col4138.Colspan = 58;
                    row17col4138.Border = 0;
                    row17col4138.HorizontalAlignment = Element.ALIGN_LEFT;
                    row17col4138.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row17col4138.PaddingLeft = 8;
                    row17col4138.PaddingTop = 10;
                    row17col4138.Phrase = new Phrase(ServiceFormValue.ServiceTicketStatus, new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                    row17col4138.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    row17col4138.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(row17col4138);

                    PdfPCell row17col41354 = new PdfPCell();
                    row17col41354.Colspan = 40;
                    row17col41354.Border = 0;
                    row17col41354.PaddingTop = 10;
                    row17col41354.HorizontalAlignment = Element.ALIGN_LEFT;
                    row17col41354.VerticalAlignment = Element.ALIGN_MIDDLE;
                    row17col41354.Padding = -4;
                    row17col41354.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, new BaseColor(0, 0, 0)));
                    row17col41354.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    row17col41354.BackgroundColor = BaseColor.WHITE;
                    table.AddCell(row17col41354);
                }

                PdfPCell row17col501 = new PdfPCell();
                row17col501.Colspan = 50;
                row17col501.Border = 0;
                row17col501.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col501.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col501.PaddingTop = 10;
                row17col501.Phrase = new Phrase("Terms & Conditions:" + System.Environment.NewLine + ticket.TermsAndConditions, new Font(Font.FontFamily.HELVETICA, 7, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col501.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col501.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col501);

                PdfPCell row17col413542 = new PdfPCell();
                row17col413542.Colspan = 10;
                row17col413542.Border = 0;
                row17col413542.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col413542.VerticalAlignment = Element.ALIGN_MIDDLE;
                row17col413542.Padding = 0;
                row17col413542.Phrase = new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 7, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col413542.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col413542.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col413542);

                PdfPCell row17col502 = new PdfPCell();
                row17col502.Colspan = 40;
                row17col502.Border = 0;
                row17col502.HorizontalAlignment = Element.ALIGN_LEFT;
                row17col502.VerticalAlignment = Element.ALIGN_TOP;
                row17col502.PaddingTop = 10;
                row17col502.Phrase = new Phrase("Note: " + System.Environment.NewLine + " Equipment supplied remains the property of '" + genicprofile.Name + "' until full payment ismade. Interest of 2% per month will be imposed on alloutstanding amount due.", new Font(Font.FontFamily.HELVETICA, 7, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col502.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col502.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col502);


                string custsign = (closerDetails.CustomerSignature);
                if (!string.IsNullOrEmpty(closerDetails.CustomerSignature))
                {
                    custsign = closerDetails.CustomerSignature;
                }
                else { custsign = _hostingEnvironment.WebRootPath + "/assets/users/NoSignature.jpg"; }

                Image jpgcellsign = Image.GetInstance(custsign);
                jpgcellsign.ScaleToFit(160f, 50f);
                PdfPCell cellHeadcellsign = new PdfPCell(jpgcellsign);
                cellHeadcellsign.Colspan = 35;
                cellHeadcellsign.PaddingTop = 10;
                cellHeadcellsign.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHeadcellsign.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHeadcellsign.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellHeadcellsign.BackgroundColor = BaseColor.WHITE;
                cellHeadcellsign.Border = 0;
                table.AddCell(cellHeadcellsign);

                PdfPCell cellHeadcellsign2 = new PdfPCell();
                cellHeadcellsign2.Colspan = 35;
                cellHeadcellsign2.PaddingTop = 10;
                cellHeadcellsign2.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHeadcellsign2.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHeadcellsign2.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellHeadcellsign2.BackgroundColor = BaseColor.WHITE;
                cellHeadcellsign2.Border = 0;
                table.AddCell(cellHeadcellsign2);

                string engsign = (closerDetails.EngineerSignature);
                if (!string.IsNullOrEmpty(closerDetails.EngineerSignature))
                {
                    engsign = closerDetails.EngineerSignature;
                }
                else { engsign = _hostingEnvironment.WebRootPath + "/assets/users/NoSignature.jpg"; }

                Image jpgcellsign3 = Image.GetInstance(engsign);
                jpgcellsign3.ScaleToFit(160f, 50f);
                PdfPCell cellHeadcellsign3 = new PdfPCell(jpgcellsign3);
                cellHeadcellsign3.Colspan = 30;
                cellHeadcellsign3.PaddingTop = 10;
                cellHeadcellsign3.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHeadcellsign3.VerticalAlignment = Element.ALIGN_MIDDLE;
                cellHeadcellsign3.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellHeadcellsign3.BackgroundColor = BaseColor.WHITE;
                cellHeadcellsign3.Border = 0;
                table.AddCell(cellHeadcellsign3);

                PdfPCell row17col511 = new PdfPCell();
                row17col511.Colspan = 35;
                row17col511.Border = 0;
                row17col511.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col511.VerticalAlignment = Element.ALIGN_TOP;
                row17col511.PaddingTop = 0;
                row17col511.Phrase = new Phrase(closerDetails.NameOfSignatory, new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col511.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col511.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col511);

                PdfPCell row17col512 = new PdfPCell();
                row17col512.Colspan = 35;
                row17col512.Border = 0;
                row17col512.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col512.VerticalAlignment = Element.ALIGN_TOP;
                row17col512.PaddingTop = 0;
                row17col512.Phrase = new Phrase("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col512.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col512.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col512);

                PdfPCell row17col513 = new PdfPCell();
                row17col513.Colspan = 30;
                row17col513.Border = 0;
                row17col513.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col513.VerticalAlignment = Element.ALIGN_TOP;
                row17col513.PaddingTop = 0;
                row17col513.Phrase = new Phrase(closerDetails.EngineerName, new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col513.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col513.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col513);


                PdfPCell row17col514 = new PdfPCell();
                row17col514.Colspan = 35;
                row17col514.Border = 0;
                row17col514.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col514.VerticalAlignment = Element.ALIGN_TOP;
                row17col514.PaddingTop = 2;
                row17col514.Phrase = new Phrase("Authorised Customer's Signature & Name", new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col514.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col514.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col514);

                PdfPCell row17col515 = new PdfPCell();
                row17col515.Colspan = 35;
                row17col515.Border = 0;
                row17col515.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col515.VerticalAlignment = Element.ALIGN_TOP;
                row17col515.PaddingTop = 2;
                row17col515.Phrase = new Phrase("Company's Stamp", new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col515.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col515.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col515);

                PdfPCell row17col516 = new PdfPCell();
                row17col516.Colspan = 30;
                row17col516.Border = 0;
                row17col516.HorizontalAlignment = Element.ALIGN_CENTER;
                row17col516.VerticalAlignment = Element.ALIGN_TOP;
                row17col516.PaddingTop = 2;
                row17col516.Phrase = new Phrase(genicprofile.Name, new Font(Font.FontFamily.HELVETICA, 8, Font.NORMAL, new BaseColor(0, 0, 0)));
                row17col516.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row17col516.BackgroundColor = BaseColor.WHITE;
                table.AddCell(row17col516);


                /// New Line //////////////////////////
                doc1.Add(table);
                if (closerDetails != null)
                {
                    if (CloserAttachment.Count > 0)
                    {
                        doc1.NewPage();
                    }
                }

                //Create a table with number of columns
                PdfPTable table1 = new PdfPTable(100);
                table1.WidthPercentage = 100;

                Image jpg1 = Image.GetInstance(genicprofile.ServiceHeader);
                jpg1.ScaleToFit(520f, 150f);
                PdfPCell cellHead1 = new PdfPCell(jpg1);
                cellHead1.Colspan = 100;
                cellHead1.Border = 0;
                cellHead1.PaddingLeft = 0;
                cellHead1.HorizontalAlignment = Element.ALIGN_CENTER;
                cellHead1.VerticalAlignment = Element.ALIGN_TOP;
                cellHead1.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(cellHead1);


                PdfPCell row58 = new PdfPCell();
                row58.Colspan = 100;
                row58.Border = 0;
                row58.Padding = 0;
                row58.HorizontalAlignment = Element.ALIGN_CENTER;
                row58.VerticalAlignment = Element.ALIGN_TOP;
                row58.PaddingTop = -15;
                row58.Phrase = new Phrase("_______________________________________________", new Font(Font.FontFamily.HELVETICA, 20, Font.BOLD, new BaseColor(0, 0, 102)));
                row58.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                row58.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(row58);


                PdfPCell cellAttachment22 = new PdfPCell(new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0))));
                cellAttachment22.Colspan = 100;
                cellAttachment22.PaddingTop = 10;
                cellAttachment22.Border = 0;
                cellAttachment22.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellAttachment22.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(cellAttachment22);


                PdfPCell cellAttachment221 = new PdfPCell(new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0))));
                cellAttachment221.Colspan = 100;
                cellAttachment221.PaddingTop = 10;
                cellAttachment221.Border = 0;
                cellAttachment221.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                cellAttachment221.BackgroundColor = BaseColor.WHITE;
                table1.AddCell(cellAttachment221);


                foreach (var i in CloserAttachment)
                {
                    PdfPCell cellAttachment21 = new PdfPCell(new Phrase("Image", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0))));
                    cellAttachment21.Colspan = 50;
                    cellAttachment21.Padding = tabelpad;
                    cellAttachment21.HorizontalAlignment = Element.ALIGN_CENTER;
                    cellAttachment21.VerticalAlignment = Element.ALIGN_TOP;
                    cellAttachment21.HorizontalAlignment = 1;
                    table1.AddCell(cellAttachment21);
                    PdfPCell cellAttachment21i = new PdfPCell(new Phrase("Remarks", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0))));
                    cellAttachment21i.Colspan = 50;
                    cellAttachment21i.Padding = tabelpad;
                    cellAttachment21i.HorizontalAlignment = Element.ALIGN_CENTER;
                    cellAttachment21i.VerticalAlignment = Element.ALIGN_TOP;
                    cellAttachment21i.HorizontalAlignment = 1;
                    table1.AddCell(cellAttachment21i);


                    string noattachment = (i.AttachmentFile);
                    if (!string.IsNullOrEmpty(i.AttachmentFile))
                    {
                        noattachment = i.AttachmentFile;
                    }
                    else { noattachment = _hostingEnvironment.WebRootPath + "/assets/users/NoAttachment.jpg"; }

                    Image Att51 = Image.GetInstance(noattachment);
                    PdfPCell cellAtt51 = new PdfPCell(Att51);
                    Att51.ScaleToFit(240f, 200f);
                    cellAtt51.Colspan = 50;
                    cellAtt51.Padding = tabelpad;
                    cellAtt51.HorizontalAlignment = Element.ALIGN_CENTER;
                    cellAtt51.VerticalAlignment = Element.ALIGN_MIDDLE;
                    cellAtt51.BackgroundColor = BaseColor.WHITE;
                    table1.AddCell(cellAtt51);

                    PdfPCell cellAttachment251 = new PdfPCell(new Phrase(i.Remarks, new Font(Font.FontFamily.HELVETICA, 9, Font.NORMAL, new BaseColor(0, 0, 0))));
                    cellAttachment251.Colspan = 50;
                    cellAttachment251.PaddingTop = 5;
                    cellAttachment251.PaddingRight = 5;
                    cellAttachment251.PaddingBottom = 8;
                    cellAttachment251.PaddingLeft = 5;
                    cellAttachment251.HorizontalAlignment = Element.ALIGN_LEFT;
                    cellAttachment251.VerticalAlignment = Element.ALIGN_TOP;
                    cellAttachment251.HorizontalAlignment = 1; //0=Left, 1=Centre, 2=Right
                    table1.AddCell(cellAttachment251);


                    PdfPCell cellAttachment1221 = new PdfPCell(new Phrase(" ", new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD, new BaseColor(0, 0, 0))));
                    cellAttachment1221.Colspan = 100;
                    cellAttachment1221.PaddingTop = 10;
                    cellAttachment1221.Border = 0;
                    cellAttachment1221.BackgroundColor = new BaseColor(System.Drawing.Color.White);
                    cellAttachment1221.BackgroundColor = BaseColor.WHITE;
                    table1.AddCell(cellAttachment1221);
                }
                if (closerDetails != null)
                {
                    if (CloserAttachment.Count > 0)
                    {
                        doc1.Add(table1);
                    }
                }
                doc1.Close();
                doc1.Dispose();
                AddPageNumberInService(filePath, filePath);
                try
                {
                    string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + ticket.TicketId + "-" + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf";
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
        static void AddPageNumberInService(string fileIn, string fileOut)
        {
            byte[] bytes = File.ReadAllBytes(fileIn);
            Font blackFont = FontFactory.GetFont("Arial", 7, Font.NORMAL, BaseColor.BLACK);
            using (MemoryStream stream = new MemoryStream())
            {
                PdfReader reader = new PdfReader(bytes);
                using (PdfStamper stamper = new PdfStamper(reader, stream))
                {
                    int pages = reader.NumberOfPages;
                    for (int i = 1; i <= pages; i++)
                    {
                        ColumnText.ShowTextAligned(stamper.GetUnderContent(i), Element.ALIGN_RIGHT, new Phrase("Page " + i.ToString() + " of " + pages, blackFont), 560f, 20f, 0);
                    }
                }
                bytes = stream.ToArray();
            }
            File.WriteAllBytes(fileOut, bytes);
        }
        #endregion End Service PDF

        public static string Priority(int id)
        {
            switch (id)
            {
                case 1: return "Heigh";
                case 2: return "Medium";
                case 3: return "Low";
                default: return "Low";
            }
        }
    }
}
