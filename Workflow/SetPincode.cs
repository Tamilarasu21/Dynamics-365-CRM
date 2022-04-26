using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System.Activities;

namespace SetPincode
{
    public class SetPincode:CodeActivity
    {
        //State is a lookup field
        [Input("State")]
        [ReferenceTarget("test_state1")]
        public InArgument<EntityReference> State { get; set; }

        //pincode is a whole number field
        [Output("Pincode")]
        public OutArgument<int> Pincode { get; set; }
        protected override void Execute(CodeActivityContext context)
        {
            //Getting the context of the selected record in lookup field
            string curState = State.Get(context)?.Name;
            if (curState == "Tamil Nadu")
            {
                Pincode.Set(context, 641001);
            }
        }
    }
}
