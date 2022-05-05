using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroupCode
{
    public class updateGroupCode : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId); try
            {
                Entity entity = (Entity)context.InputParameters["Target"];
                string GroupCode = entity.GetAttributeValue<string>("test_groupcode");
                string fetchXML = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                                    <entity name='contact'>
                                    <attribute name='fullname' />
                                    <attribute name='telephone1' />
                                    <attribute name='contactid' />
                                    <order attribute='fullname' descending='false' />
                                    <filter type='and'>
                                    <condition attribute='parentcustomerid' operator='eq' value='{" + entity.Id + @"}' />
                                    </filter>
                                    </entity>
                                    </fetch>";
                // RetrieveMultiple using fetchXML
                EntityCollection retrievedContacts = service.RetrieveMultiple(new FetchExpression(fetchXML));
                if (retrievedContacts.Entities.Count > 0)
                {
                    foreach (Entity e in retrievedContacts.Entities)
                    {
                        Entity ContactUpdate = new Entity("contact");
                        ContactUpdate["test_groupcode"] = GroupCode;
                        ContactUpdate.Id = e.Id;
                        service.Update(ContactUpdate);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
