using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Crm.Sdk.Messages;
namespace TestPlugin
{
 public class ImageDemo : IPlugin
 {
 public void Execute(IServiceProvider serviceProvider)
 {
 IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
 IOrganizationService service = ((IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory))).
 CreateOrganizationService(new Guid?(context.UserId));
 ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
if((context.InputParameters.Contains("Target")) && (context.InputParameters["Target"] is Entity) && context.MessageName.ToUpper()=="UPDATE")
 {
  Entity entity = (Entity)context.InputParameters["Target"];
  if (entity.LogicalName.ToLower() != "account") return;
  try
  {
   Entity preImage = (Entity)context.PreEntityImages["Image"];
   Entity postImage = (Entity)context.PostEntityImages["Image"];
   if (preImage.Contains("test_status"))
   {
        if (preImage.GetAttributeValue<OptionSetValue>("test_status").Value != null)
        {
          throw new InvalidPluginExecutionException($"Status changed from {preImage} to {postImage}");
        }
    }
  }
   catch (Exception ex)
    {
     throw new Exception(""+ex.Message);
     }
   }
  }
 }
}