using QuocThu21305.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace QuocThu21305.Controllers
{
    public class NtqCustomerScaffdingController : Controller
    {
        // mocdata
        private static List<NtqCustomer>  listCustomer = new List<NtqCustomer>()
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

    // GET: NtqCustomerScaffding
    // listCustomer
    public ActionResult Index()
        {
            return View(listCustomer);
        }
        [HttpGet]
        public ActionResult NtqCreate()
        {
            var model = new NtqCustomer();
            return View(model);
        }
        [HttpPost]
        public ActionResult NtqCreate(NtqCustomer model)
        {
          // Thêm mới đối tượng khách hàng vào ds dữ liệu
          listCustomer.Add(model);

            // return View(model);
            // Chuyển về trang ds
            return RedirectToAction("Index");
        }
        public ActionResult NtqEdit(int id)
        {
            var customer = listCustomer.FirstOrDefault(x=>x.CustomerId==id);
            return View(customer);
        }
    }
}