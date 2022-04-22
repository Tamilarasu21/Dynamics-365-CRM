using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;


namespace EmailDuplicate
{
    public class EmailDuplicate:IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            IOrganizationServiceFactory servicefactory =
             (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service =
            servicefactory.CreateOrganizationService(context.UserId);

            //region working code
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
            {
                Entity entity = (Entity)context.InputParameters["Target"];
                if (entity.LogicalName != "test_student")
                {
                    return;
                }
                if (context.Depth > 1)
                {
                    return; 
                }
                try
                {
                    if (entity.Attributes.Contains("test_name"))
                    {
                        string email = entity.GetAttributeValue<string>("test_name").ToString();
                        //handle the above line of code accordingly based on dataType(String, EntityReference, Datetime etc.)
                        QueryExpression contactQuery = new QueryExpression("test_student");
                        contactQuery.ColumnSet = new ColumnSet("test_name");
                        contactQuery.Criteria.AddCondition("test_name", ConditionOperator.Equal, email);
                        EntityCollection contactColl = service.RetrieveMultiple(contactQuery);
                        if (contactColl.Entities.Count > 0)
                        {
                            throw new Exception("Duplicates found !!!");

                        }
                    }
                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }
            //endregion
        }
    }
}
