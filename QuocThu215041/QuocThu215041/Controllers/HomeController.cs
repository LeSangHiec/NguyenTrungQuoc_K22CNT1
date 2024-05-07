using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuocThu215041.Controllers
{
    public class HomeController : Controller
    {
        // Action để hiển thị danh sách bài hát
        public ActionResult Index()
        {
            // Mock data for demonstration
            var songs = new List<Song>
            {
                new Song { Id = 1, Title = "Song 1", DownloadUrl = "/Content/Song1.mp3" },
                new Song { Id = 2, Title = "Song 2", DownloadUrl = "/Content/Song2.mp3" },
                new Song { Id = 3, Title = "Song 3", DownloadUrl = "/Content/Song3.mp3" }
            };

            return View(songs);
        }

        // Action để hiển thị chi tiết bài hát
        public ActionResult Detail(int id)
        {
            // Lấy thông tin bài hát từ cơ sở dữ liệu hoặc mock data
            var song = GetSongById(id);

            return View(song);
        }

        // Hàm mock data để lấy thông tin bài hát dựa trên ID
        private Song GetSongById(int id)
        {
            // Trong ví dụ này, sử dụng mock data
            // Bạn có thể thay thế bằng lấy dữ liệu từ cơ sở dữ liệu thực tế
            return new Song { Id = id, Title = "Song " + id, DownloadUrl = "/Content/Song" + id + ".mp3" };
        }
    }
}