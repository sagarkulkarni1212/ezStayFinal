
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage.Queue;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EZStayAdminAPI.Helper
{
    public class StorageHelper
    {
        private CloudStorageAccount storageAccount;
        private CloudBlobClient blobClient;
        //private CloudTableClient tableClient;
        //private CloudQueueClient queueClient;

        public string ConnectionString
        {
            set
            {
                this.storageAccount = CloudStorageAccount.Parse(value);
                this.blobClient = storageAccount.CreateCloudBlobClient();
                //this.tableClient = storageAccount.CreateCloudTableClient();
                //this.queueClient = storageAccount.CreateCloudQueueClient();
            }
        }

        public async Task<string> UploadHotelImageAsync(string containerName, string imagePath)
        {
            var container = blobClient.GetContainerReference(containerName);
            await container.CreateIfNotExistsAsync();
            var imageName = Path.GetFileName(imagePath);
            var blob = container.GetBlockBlobReference(imageName);
            await blob.DeleteIfExistsAsync();
            await blob.UploadFromFileAsync(imagePath);
            return blob.Uri.AbsoluteUri;
        }

            }
}
