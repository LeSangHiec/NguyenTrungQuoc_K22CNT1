using QuocThu21305.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuocThu21305.Controllers
{
    public class NtqCustomerController : Controller
    {
        // GET: NtqCustomer
        public ActionResult Index()
        {
            return View();
        }

        // Action: NtqCustomerDetail
        public ActionResult NtqCustomerDetail() 
        {
            //Tạo đối tượng dữ liệu
            var customer = new NtqCustomer()
            {
                CustomerId = 1,
                FirstName = "Quốc",
                LastName = "Nguyễn",
                Address = "K22CNT1",
                YearOfBirth = 2004
            };
        ViewBag.customer = customer;
        return View();
        }

        // Get:NtqListCustomer
        public ActionResult NtqListCustomer()

        {
            var list = new List<NtqCustomer>()
            {
                new NtqCustomer()
                {
                CustomerId = 1,
                FirstName = "Quốc",
                LastName = "Nguyễn",
                Address = "K22CNT1",
                YearOfBirth = 2004
                },
                new NtqCustomer()
                {
                CustomerId = 2,
                FirstName = "Quốc1",
                LastName = "Nguyễn1",
                Address = "K22CNT2",
                YearOfBirth = 2005
                },
                new NtqCustomer()
                {
                CustomerId = 3,
                FirstName = "Quốc2",
                LastName = "Nguyễn2",
                Address = "K22CNT3",
                YearOfBirth = 2006
                },
                new NtqCustomer()
                {
                CustomerId = 4,
                FirstName = "Quốc3",
                LastName = "Nguyễn3",
                Address = "K22CNT4",
                YearOfBirth = 2007
                },
            };
            // ViewBag.list = list; // Đưa dữ liệu ra view bằng đối tượng viewBag
            return View(list);
        }
    }
}