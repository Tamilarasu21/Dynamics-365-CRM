using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeleteRecord
{
    public class DeleteRecord : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            //try
            //{
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
            {
                if (context.MessageName == "Delete")
                {
                EntityReference entityRef = (EntityReference)context.InputParameters["Target"];
                //Entity account = new Entity("account");
                    service.Delete(entityRef.LogicalName,entityRef.);
                }
            }
            }
            catch(Exception)
            {
               throw;
            }
        }
    }
}
