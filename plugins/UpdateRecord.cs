using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetrieveUpdate
{
    public class RetrieveUpdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = (IOrganizationService)serviceFactory.CreateOrganizationService(context.UserId);
            try
            {
                Entity entity = (Entity)context.InputParameters["Target"];
                Guid entityId = entity.Id;
                ColumnSet cols = new ColumnSet(new string[] { "lastname", "firstname", "address1_city" });
                // retrieve a record
                var contact = service.Retrieve("contact", entityId, cols);
                
                if (!entity.Contains("address1_city"))
                {
                    contact.Attributes.Add("address1_city", "New Address");
                }
                else
                {
                    contact.Attributes["address1_city"] = "New Address";
                }
                // update the record
                service.Update(contact);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
