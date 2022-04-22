using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace CustomWorkflow
{
    public class SetStateToNY: CodeActivity
    {
        [RequiredArgument]
        [Input("String input")]
        public InArgument<string> CityInput { get; set; }

        [Output("String output")]
        public OutArgument<string> StateOutput { get; set; }

        protected override void Execute(CodeActivityContext context)
        {
            string city = CityInput.Get(context);
            if (city == "NYC")
                StateOutput.Set(context, "New York");
            else
                StateOutput.Set(context, string.Empty);
        }
    }
}