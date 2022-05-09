using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeleteCity
{
    public class DeleteCity : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
                IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
                IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                if (context.MessageName.ToLower() != "delete" && context.Stage != 10)
                {
                    return;
                }
                EntityReference targetEntity = context.InputParameters["Target"] as EntityReference;
                QueryExpression qeState = new QueryExpression()
                {
                    EntityName = "test_state",
                    ColumnSet = new ColumnSet("test_name")
                };
                qeState.Criteria.AddCondition("test_stateid",ConditionOperator.Equal, targetEntity.Id);
                EntityCollection ecState = service.RetrieveMultiple(qeState);
                if (ecState.Entities.Count>0)
                {
                    throw new Exception("Child record found!");
                }
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
        }
    }
}
