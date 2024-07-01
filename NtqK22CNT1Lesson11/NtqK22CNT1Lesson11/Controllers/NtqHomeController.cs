using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NtqK22CNT1Lesson11.Models;

namespace NtqK22CNT1Lesson11.Controllers
{
    public class NtqHomeController : Controller
    {
        public ActionResult NtqIndex()
        {
            // lấy thông tin từ session
            //ViewBag["ntqTaiKhoan"] = "";
            if (Session["NtqMember"] != null)
            {
                ViewBag.ntqTaiKhoan = ((NtqTaiKhoan)Session["NtqMember"]).NtqFullName;
            }
            return View();
        }

        public ActionResult NtqAbout()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult NtqContact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}