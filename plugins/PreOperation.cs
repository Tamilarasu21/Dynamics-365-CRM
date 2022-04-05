using Microsoft.Xrm.Sdk;
using System;

namespace PluginBasics.PluginBasics
{
    public class PreOperation : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

                if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
                {
                    Entity entity = (Entity)context.InputParameters["Target"];

                    if (entity.LogicalName == "account")
                    {
                        if (entity.Attributes.Contains("tickersymbol") == true)
                        {
                            // Get the current attribute value
                            var tickersymbol = entity["tickersymbol"].ToString();

                            // Update the attribute
                            entity["tickersymbol"] = "NYSE: " + tickersymbol;
                        }
                    }
                }
            }
            catch (InvalidPluginExecutionException e)
            {
                throw new InvalidPluginExecutionException("An error occured:" + e.Message);
            }
        }
    }
}