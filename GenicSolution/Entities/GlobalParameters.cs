using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace GenicSolution.Entities
{
    public class GlobalParameters
    {
        public static string AWS_ACCESS_KEY = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["AWS_ACCESS_KEY"];
        public static string AWS_SECRET_KEY = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["AWS_SECRET_KEY"];
        public static string AWS_BUCKET_NAME = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["AWS_BUCKET_NAME"];
        public static string AWS_FULL_URL = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["AWS_FULL_URL"];
        public static string AWS_FOLDER = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["AWS_FOLDER"];
        public static string FSM_LINK_FOR_SIGN = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["FSM_LINK_FOR_SIGN"];
        public static string FSM_PLAN_URL = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["FSM_PLAN_URL"];
        public static string FSM_TICKET_NAME = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["FSM_TICKET_NAME"];
        public static string FSM_ENGINEER_NAME = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["FSM_ENGINEER_NAME"];
        public static string FSM_PRODUCT_NAME = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["FSM_PRODUCT_NAME"];

        

        public const string BaseDocFolder = "Documents";
        public const string AWS_DRIVE = "Documents";
        public static DateTime GetSingaporeTimeZone(DateTime dt, string ConverTo)
        {
            TimeSpan tsLocal = TimeZoneInfo.Local.GetUtcOffset(dt);
            TimeZoneInfo tzi = TimeZoneInfo.FindSystemTimeZoneById(ConverTo);
            TimeSpan tsIndia = tzi.GetUtcOffset(new DateTime());
            TimeSpan tsDifference = tsIndia.Subtract(tsLocal);
            return DateTime.Now.Add(tsDifference);
        }
        public static long MillisecondsTimestamp()
        {
            DateTime baseDate = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
            return (long)(DateTime.UtcNow.ToUniversalTime() - baseDate).TotalMilliseconds;
        }
        public static string EncryptPassword(string password)
        {
            MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider();
            byte[] hashedDataBytes;
            UTF8Encoding encoder = new UTF8Encoding();
            hashedDataBytes = md5Hasher.ComputeHash(encoder.GetBytes(password));
            System.Text.StringBuilder strHex = new System.Text.StringBuilder();
            foreach (byte b in hashedDataBytes)
            {
                strHex.Append(b.ToString("x2").ToLower());
            }

            string str = strHex.ToString();
            return str;
        }
        public static string FixedPrimaryEncryptionSalt = "d2f*jk#g&h";
        public static string GeneratePassword()
        {
            Random r = new Random();
            string Cap = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
            string Sml = "abcdefghijklmnopqrstuvwxyz";
            string Num = "0123456789";
            string Spl = "!@#$%";
            string p = Cap[r.Next(Cap.Length)].ToString();
            p += Spl[r.Next(Spl.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            p += Cap[r.Next(Cap.Length)].ToString();
            p += Spl[r.Next(Spl.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            return p.ToString();

        }
        public static string RandamUniqueId()
        {
            Random r = new Random();
            string Cap = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
            string Sml = "abcdefghijklmnopqrstuvwxyz";
            string Num = "0123456789";
            string p = Cap[r.Next(Cap.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            p += Cap[r.Next(Cap.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            p += Cap[r.Next(Cap.Length)].ToString();
            p += Sml[r.Next(Sml.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            p += Num[r.Next(Num.Length)].ToString();
            return p.ToString();

        }
        public bool ValidatePassword(string password, out string ErrorMessage)
        {
            var input = password;
            ErrorMessage = string.Empty;

            if (string.IsNullOrWhiteSpace(input))
            {
                throw new Exception("Password should not be empty");
            }

            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasMiniMaxChars = new Regex(@".{8,15}");
            var hasLowerChar = new Regex(@"[a-z]+");
            var hasSymbols = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,-]");

            if (!hasLowerChar.IsMatch(input))
            {
                ErrorMessage = "Password should contain at least one lower case letter.";
                return false;
            }
            else if (!hasUpperChar.IsMatch(input))
            {
                ErrorMessage = "Password should contain at least one upper case letter.";
                return false;
            }
            else if (!hasMiniMaxChars.IsMatch(input))
            {
                ErrorMessage = "Password should not be lesser than 8 or greater than 15 characters.";
                return false;
            }
            else if (!hasNumber.IsMatch(input))
            {
                ErrorMessage = "Password should contain at least one numeric value.";
                return false;
            }

            else if (!hasSymbols.IsMatch(input))
            {
                ErrorMessage = "Password should contain at least one special case character.";
                return false;
            }
            else
            {
                return true;
            }
        }
        public static string QuotePath(string QuoteId)
        {
            return string.Format("https://{0}.s3.amazonaws.com/{1}", AWS_BUCKET_NAME, AWS_FOLDER + "/Quote/" + QuoteId + "/" + QuoteId + ".pdf");
        }
        public static string TicketPath(string TicketId, string name)
        {
            return string.Format("https://{0}.s3.amazonaws.com/{1}", AWS_BUCKET_NAME, AWS_FOLDER + "/Ticket/" + TicketId + "/" + TicketId + "-" + name + ".pdf");
        }
        public static string InvoicePath(string InvoiceId)
        {
            return string.Format("https://{0}.s3.amazonaws.com/{1}", AWS_BUCKET_NAME, AWS_FOLDER + "/Invoice/" + InvoiceId + "/" + InvoiceId + ".pdf");
        }
        public static bool IsEmailValid(string emailaddress)
        {
            try
            {
                MailAddress m = new MailAddress(emailaddress);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }
        public class RecourceParam
        {
            public Guid? TokenNo { get; set; }
            public List<Guid> CustomerId { get; set; }
            public List<Guid> EngineerId { get; set; }
            public List<string> Status { get; set; }
        }
        public class Base64StringBody
        {
            public string Base64 { get; set; }
        }
        public class ProductWarrantyFilter
        {
            public string StartDate { get; set; }
            public string EndDate { get; set; }
            public Guid CustomerId { get; set; }
            public Guid ProductId { get; set; }
            public string searchStr { get; set; }

        }
        public class NewJobRequest
        {
            public Guid? TicketId { get; set; }
            public string Description { get; set; }
            public string AppointmentStart { get; set; }
            public string AppointmentEnd { get; set; }
            public string Status { get; set; }
            public Guid? PropertyId { get; set; }  
        }

        public class TempParameters
        {
            public int id { get; set; }
            public string v1 { get; set; }
            public Guid TicketId { get; set; }
        }
    }
}
