using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Crm.Sdk.Messages;
using System.ServiceModel;

namespace PreImagePhoneNum
{
    public class PreImagePhoneNum:IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // For Log Tracing
            ITracingService tracingService =
            (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // execution context 
            IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

            // The InputParameters collection contains all the data passed in the message request.  
            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is Entity)
            {
                // Obtain the target entity from the input parameters.  
                Entity updatedEntity = (Entity)context.InputParameters["Target"];

                // Obtain the organization service reference which you will need for  
                // web service calls.  
                IOrganizationServiceFactory serviceFactory =
                    (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                try
                {
                    string originalBusinessPhone = string.Empty;
                    string modifiedBusinessPhone = string.Empty;

                    // Plug-in business logic goes here.
                    if (updatedEntity.Attributes.Contains("telephone1"))
                        modifiedBusinessPhone = updatedEntity.Attributes["telephone1"].ToString();

                    Entity preImageOriginalEntity = context.PreEntityImages["phonenum"];
                    if (preImageOriginalEntity.Attributes.Contains("telephone1"))
                        originalBusinessPhone = preImageOriginalEntity.Attributes["telephone1"].ToString();

                    // only way to show a message seems to be via throwing an exception
                    throw new InvalidPluginExecutionException($"Phone number changed from {originalBusinessPhone} to {modifiedBusinessPhone}");
                }

                catch (FaultException<OrganizationServiceFault> ex)
                {
                    throw new InvalidPluginExecutionException("An error occurred in MyFirstPlugin.", ex);
                }

                catch (Exception ex)
                {
                    tracingService.Trace("PreImagePhoneNum: {0}", ex.ToString());
                    throw;
                }
            }
        }
    }
}