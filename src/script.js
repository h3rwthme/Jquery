$(document).ready(function () {

  // ── 1. HIDE / SHOW ──────────────────
  $("#btn-hide").click(function () {
    $("#kotak-hide").hide(500);
  });
  $("#btn-show").click(function () {
    $("#kotak-hide").show(500);
  });
  $("#btn-toggle").click(function () {
    $("#kotak-hide").toggle(400);
  });

  // ── 2. FADE ─────────────────────────
  $("#btn-fadeout").click(function () {
    $(".fade-box").fadeOut(800);
  });
  $("#btn-fadein").click(function () {
    $(".fade-box").fadeIn(800);
  });
  $("#btn-fadetoggle").click(function () {
    $(".fade-box").fadeToggle(600);
  });
  $("#btn-fadeto").click(function () {
    $(".fade-box").fadeTo(800, 0.3);
  });

  // ── 3. SLIDE ────────────────────────
  $("#btn-slidedown").click(function () {
    $("#panel-slide").slideDown("slow");
  });
  $("#btn-slideup").click(function () {
    $("#panel-slide").slideUp("slow");
  });
  $("#btn-slidetoggle").click(function () {
    $("#panel-slide").slideToggle(600);
  });

  // ── 4. ANIMATE ──────────────────────
  $("#btn-gerak-kanan").click(function () {
    $("#kotak-gerak").animate({ left: "250px" }, 600);
  });
  $("#btn-gerak-kiri").click(function () {
    $("#kotak-gerak").animate({ left: "0px" }, 600);
  });
  $("#btn-gerak-besar").click(function () {
    $("#kotak-gerak").animate({ width: "120px", height: "120px", fontSize: "42px" }, 500);
  });
  $("#btn-gerak-reset").click(function () {
    $("#kotak-gerak").animate({ left: "0px", width: "80px", height: "80px", fontSize: "28px" }, 400);
  });

  // ── 5. STOP ─────────────────────────
  $("#btn-start-anim").click(function () {
    $("#stop-box").animate({ width: "100%" }, 4000);
  });
  $("#btn-stop-anim").click(function () {
    $("#stop-box").stop();
  });

  // ── 6. CALLBACK ─────────────────────
  $("#btn-callback").click(function () {
    $("#teks-status").text("Animasi sedang jalan...");
    $("#dot-status").addClass("active");

    $("#kotak-cb").fadeOut(1200, function () {
      // Ini callback! Dijalankan SETELAH fadeOut selesai
      $("#teks-status").text("Callback aktif! Animasi sudah selesai.");
      $("#kotak-cb").fadeIn(600);
    });
  });

  // ── 8. CHAINING ─────────────────────
  // Chain 1: fadeOut lalu fadeIn dengan CSS dulu
  $("#btn-chain1").click(function () {
    $("#rantai-box")
      .css("background", "#4ecdc4")
      .fadeOut(500)
      .fadeIn(500);
  });

  // Chain 2: ubah CSS lalu animate ukuran
  $("#btn-chain2").click(function () {
    $("#rantai-box")
      .css({ background: "#f5c518", borderRadius: "50%" })
      .animate({ width: "180px", height: "180px" }, 600)
      .animate({ width: "120px", height: "120px" }, 400);
  });

  // Chain 3: kombinasi semua
  $("#btn-chain3").click(function () {
    $("#rantai-box")
      .css({ background: "#ff6b35", borderRadius: "12px", fontSize: "48px" })
      .slideUp(300)
      .slideDown(300)
      .animate({ opacity: 0.3 }, 300)
      .animate({ opacity: 1 }, 300);
  });

  // Reset chaining
  $("#btn-chain-reset").click(function () {
    $("#rantai-box")
      .stop(true, true)
      .css({ background: "#ff6b35", borderRadius: "12px", width: "120px", height: "120px", fontSize: "36px", opacity: 1 });
  });

});