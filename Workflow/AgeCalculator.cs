using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace AgeCalculator
{
    public class AgeCalculator : CodeActivity
    {
        // Getting date field
        [RequiredArgument]
        [Input("Date of Birth")]
        public InArgument<DateTime> DOB { get; set; }

        [Output("Final Age")]
        public OutArgument<Int32> Age { get; set; }
        protected override void Execute(CodeActivityContext context)
        {
            DateTime dateOB = DOB.Get(context);
            // calculating age
            int CalcAge = Convert.ToInt32((DateTime.Now.Subtract(dateOB).TotalDays) / 365);
            Age.Set(context, CalcAge);
        }

    }
}
