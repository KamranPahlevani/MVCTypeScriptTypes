using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCTypeScriptTypes.Controllers
{
    public class TypeScriptTypesController : Controller
    {
        // GET: TypeScriptTypes
        public ActionResult TypesDemo()
        {
            return View();
        }

        public ActionResult DynamicTypes()
        {
            return View();
        }

        public ActionResult AmbientDeclarations()
        {
            return View();
        }

        public ActionResult PrimitiveTypes()
        {
            return View();
        }

    }
}