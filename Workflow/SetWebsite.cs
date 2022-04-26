using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace SetUrl
{
    public class SetUrl : CodeActivity
    {
        [Input("Name")]
        public InArgument<string> NameInput { get; set; }

        [Output("Website")]
        public OutArgument<string> UrlOutput { get; set; }
        protected override void Execute(CodeActivityContext context)
        {
            string Name = NameInput.Get(context);
            string weburl = "https://" + Name + ".com";
            UrlOutput.Set(context, weburl);
        }
    }
}