using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace sampleWf
{
    public class sampleWf : CodeActivity
    {
        //Data Type : Option Set
        [Input("preferredcontactmethodcode")]
        [RequiredArgument]
        [AttributeTarget("contact", "preferredcontactmethodcode")]
        public InArgument<OptionSetValue> preferredcontactmethodcode { get; set; }

        //Data Type : single line of text
        [Output("mobilephone")]
        public OutArgument<string> mobilephone { get; set; }
        protected override void Execute(CodeActivityContext context)
        {
            OptionSetValue perferred = preferredcontactmethodcode.Get<OptionSetValue>(context);

            int status = perferred.Value;
            if (status == 3)
                mobilephone.Set(context,"8565445676");
            else
                mobilephone.Set(context,"23445-0987");
        }
    }
}