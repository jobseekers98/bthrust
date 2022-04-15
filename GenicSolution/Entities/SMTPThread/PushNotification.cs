using Nancy.Json;
using System;
using System.IO;
using System.Net;
using System.Text;

namespace GenicSolution.Entities.SMTPThread
{
    public class PushNotification
    {
        public PushNotification(string AppToken, string title, string body)
        {
            try
            {
                var applicationID = "AAAAJBvoqJw:APA91bGTzaM9BkzOmgeeTcr6lL6D058lZ-zO8uYSUkWTuQ1QGUAmd47vLGMhbeZPI4qt7iK3lRcdjVuksyZDjXt76N2x2-v5cKxkIfKD3CtMlhXX-fIq42o7VehnhyRTMeXGPu9cYBf3";
                var senderId = "155087055004";
                WebRequest tRequest = WebRequest.Create("https://fcm.googleapis.com/fcm/send");
                tRequest.Method = "post";
                tRequest.ContentType = "application/json";
                tRequest.Headers.Add(string.Format("Authorization: key={0}", applicationID));
                tRequest.Headers.Add(string.Format("Sender: id={0}", senderId));
                var data = new
                {
                    to = AppToken,
                    notification = new
                    {
                        title,
                        body,
                        priority = 10
                    }
                };
                var serializer = new JavaScriptSerializer();
                var json = serializer.Serialize(data);
                Byte[] byteArray = Encoding.UTF8.GetBytes(json);

                tRequest.ContentLength = byteArray.Length;
                using (Stream dataStream = tRequest.GetRequestStream())
                {
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    using (WebResponse tResponse = tRequest.GetResponse())
                    {
                        using (Stream dataStreamResponse = tResponse.GetResponseStream())
                        {
                            using (StreamReader tReader = new StreamReader(dataStreamResponse))
                            {
                                String sResponseFromServer = tReader.ReadToEnd();
                                string str = sResponseFromServer;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
        }
    }
}
