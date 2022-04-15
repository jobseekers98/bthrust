using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace GenicSolution.Entities.Helper
{
    public class AWSHelper
    {
        internal bool SendToAWS(IFormFile file, string end_point, out string msg)
        {
            try
            {
                using (var client = new AmazonS3Client(GlobalParameters.AWS_ACCESS_KEY, GlobalParameters.AWS_SECRET_KEY, RegionEndpoint.APSoutheast1))
                {
                    using (var newMemoryStream = new MemoryStream())
                    {
                        file.CopyTo(newMemoryStream);
                        var uploadRequest = new TransferUtilityUploadRequest
                        {
                            InputStream = newMemoryStream,
                            Key = end_point,
                            BucketName = GlobalParameters.AWS_BUCKET_NAME,
                            CannedACL = S3CannedACL.PublicRead
                        };
                        var fileTransferUtility = new TransferUtility(client);
                        Task.WaitAll(fileTransferUtility.UploadAsync(uploadRequest));
                    }
                }
                msg = string.Format("https://{0}.s3.amazonaws.com/{1}", GlobalParameters.AWS_BUCKET_NAME, end_point);
                return true;
            }
            catch (AmazonS3Exception s3Exception)
            {
                msg = s3Exception.Message.ToString();
                return false;
            }
        }
        internal bool SendBase64ToAWS(string base64Image, string end_point, out string msg)
        {
            try
            {
                if (!string.IsNullOrEmpty(base64Image))
                {
                    base64Image = base64Image.Replace("data:image/png;base64,", "");
                    base64Image = base64Image.Replace("data:image/jpg;base64,", "");
                    base64Image = base64Image.Replace("data:image/jpeg;base64,", "");
                    byte[] bytes = Convert.FromBase64String(base64Image);
                    using (var client = new AmazonS3Client(GlobalParameters.AWS_ACCESS_KEY, GlobalParameters.AWS_SECRET_KEY, RegionEndpoint.APSoutheast1))
                    {
                        var request = new PutObjectRequest
                        {
                            BucketName = GlobalParameters.AWS_BUCKET_NAME,
                            CannedACL = S3CannedACL.PublicRead,
                            Key = string.Format("{0}", end_point)
                        };
                        using (var ms = new MemoryStream(bytes))
                        {
                            request.InputStream = ms;
                            Task.WaitAll(client.PutObjectAsync(request));
                        }
                    }
                }
                else
                {
                    msg = "";
                    return false;
                }
                msg = string.Format("https://{0}.s3.amazonaws.com/{1}", GlobalParameters.AWS_BUCKET_NAME, end_point);
                return true;
            }
            catch (AmazonS3Exception s3Exception)
            {
                msg = s3Exception.Message.ToString();
                return false;
            }
        }
        internal bool SendDriveToAWS(string base64Image, string ext, string end_point,  out string msg)
        {
            try
            {
                if (!string.IsNullOrEmpty(base64Image))
                {
                    string base64header = string.Format("data:image/{0};base64,", ext);
                    base64Image = base64Image.Replace(base64header, "");
                    byte[] bytes = Convert.FromBase64String(base64Image);
                    using (var client = new AmazonS3Client(GlobalParameters.AWS_ACCESS_KEY, GlobalParameters.AWS_SECRET_KEY, RegionEndpoint.APSoutheast1))
                    {
                        var request = new PutObjectRequest
                        {
                            BucketName = GlobalParameters.AWS_BUCKET_NAME,
                            CannedACL = S3CannedACL.PublicRead,
                            Key = string.Format("{0}", end_point)
                        };
                        using (var ms = new MemoryStream(bytes))
                        {
                            request.InputStream = ms;
                            Task.WaitAll(client.PutObjectAsync(request));
                        }
                    }
                }
                else
                {
                    msg = "";
                    return false;
                }
                msg = string.Format("https://{0}.s3.amazonaws.com/{1}", GlobalParameters.AWS_BUCKET_NAME, end_point);
                return true;
            }
            catch (AmazonS3Exception s3Exception)
            {
                msg = s3Exception.Message.ToString();
                return false;
            }
        }
        internal bool RemoveFromAWS(string url)
        {
            try
            {
                var client = new Amazon.S3.AmazonS3Client(GlobalParameters.AWS_ACCESS_KEY, GlobalParameters.AWS_SECRET_KEY, RegionEndpoint.APSoutheast1);
                DeleteObjectRequest request = new DeleteObjectRequest
                {
                    BucketName = GlobalParameters.AWS_BUCKET_NAME,
                    Key = url
                };
                Task.WaitAll(client.DeleteObjectAsync(request));
                return true;
            }
            catch { return false; }
        }
    }
}
