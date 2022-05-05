using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace CreateRecord
{
    public class CreateRecord : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            //ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            try
            {
                Entity newAccount = new Entity("account");
                // Generate Random String
                Random random = new Random();
                int length = 5;
                var rString = "";
                for (var i = 0; i < length; i++)
                {
                    rString += ((char)(random.Next(1, 26) + 64)).ToString().ToLower();
                }
                newAccount["name"] = rString;
                newAccount["telephone1"] = "908807123";
                // Resolve the infinite loop
                if (context.Depth <= 1)
                {
                    service.Create(newAccount);
                }
                
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                throw new InvalidPluginExecutionException("An error occurred", ex);
            }
        }
    }
}
