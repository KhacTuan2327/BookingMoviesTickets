import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Daftar = React.lazy(() => import("pages/Daftar"));
const DaftarOne = React.lazy(() => import("pages/DaftarOne"));
const Login = React.lazy(() => import("pages/Login"));
const PilihJadwal = React.lazy(() => import("pages/PilihJadwal"));
const PilihKursi = React.lazy(() => import("pages/PilihKursi"));
const HomepageTwo = React.lazy(() => import("pages/HomepageTwo"));
const PilihJadwalOne = React.lazy(() => import("pages/PilihJadwalOne"));
const KonfirmasiPembayaran = React.lazy(() =>
  import("pages/KonfirmasiPembayaran")
);
const TIXIDNewsOne = React.lazy(() => import("pages/TIXIDNewsOne"));
const TIXIDNews = React.lazy(() => import("pages/TIXIDNews"));
const ChoosingSchedule = React.lazy(() => import("pages/ChoosingSchedule"));
const ChoosingSeatsBeforeLogin = React.lazy(() =>
  import("pages/ChoosingSeatsBeforeLogin")
);
const ChoosingScheduleTwo = React.lazy(() =>
  import("pages/ChoosingScheduleTwo")
);
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));
const SignupPhoneNumberWrong = React.lazy(() =>
  import("pages/SignupPhoneNumberWrong")
);
const LoginPhoneNumberPasswordWrong = React.lazy(() =>
  import("pages/LoginPhoneNumberPasswordWrong")
);
const SignUpFILMWILL = React.lazy(() => import("pages/SignUpFILMWILL"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const Group14NewsVideo = React.lazy(() => import("pages/Group14NewsVideo"));
const Group14NewsArticle = React.lazy(() => import("pages/Group14NewsArticle"));
const Group14News = React.lazy(() => import("pages/Group14News"));
const ComingSoonMovies = React.lazy(() => import("pages/ComingSoonMovies"));
const TransactionDetail = React.lazy(() => import("pages/TransactionDetail"));
const MyTicketActiveTicket = React.lazy(() =>
  import("pages/MyTicketActiveTicket")
);
const MyTicketTransactionList = React.lazy(() =>
  import("pages/MyTicketTransactionList")
);
const PaymentSuccess = React.lazy(() => import("pages/PaymentSuccess"));
const ConfirmPayment = React.lazy(() => import("pages/ConfirmPayment"));
const ChoosingSeats = React.lazy(() => import("pages/ChoosingSeats"));
const ChoosingScheduleOne = React.lazy(() =>
  import("pages/ChoosingScheduleOne")
);
const Card = React.lazy(() => import("pages/Card"));
const HeaderandFooter = React.lazy(() => import("pages/HeaderandFooter"));
const Prototype = React.lazy(() => import("pages/Prototype"));
const Button = React.lazy(() => import("pages/Button"));
const Input = React.lazy(() => import("pages/Input"));
const PosterandAdvertisement = React.lazy(() =>
  import("pages/PosterandAdvertisement")
);
const Color = React.lazy(() => import("pages/Color"));
const Font = React.lazy(() => import("pages/Font"));
const CoverImage = React.lazy(() => import("pages/CoverImage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/coverimage" element={<CoverImage />} />
          <Route path="/font" element={<Font />} />
          <Route path="/color" element={<Color />} />
          <Route
            path="/posterandadvertisement"
            element={<PosterandAdvertisement />}
          />
          <Route path="/input" element={<Input />} />
          <Route path="/button" element={<Button />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/headerandfooter" element={<HeaderandFooter />} />
          <Route path="/card" element={<Card />} />
          <Route
            path="/choosingscheduleone"
            element={<ChoosingScheduleOne />}
          />
          <Route path="/choosingseats" element={<ChoosingSeats />} />
          <Route path="/confirmpayment" element={<ConfirmPayment />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route
            path="/mytickettransactionlist"
            element={<MyTicketTransactionList />}
          />
          <Route
            path="/myticketactiveticket"
            element={<MyTicketActiveTicket />}
          />
          <Route path="/transactiondetail" element={<TransactionDetail />} />
          <Route path="/comingsoonmovies" element={<ComingSoonMovies />} />
          <Route path="/group14news" element={<Group14News />} />
          <Route path="/group14newsarticle" element={<Group14NewsArticle />} />
          <Route path="/group14newsvideo" element={<Group14NewsVideo />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/signupfilmwill" element={<SignUpFILMWILL />} />
          <Route
            path="/loginphonenumberpasswordwrong"
            element={<LoginPhoneNumberPasswordWrong />}
          />
          <Route
            path="/signupphonenumberwrong"
            element={<SignupPhoneNumberWrong />}
          />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route
            path="/choosingscheduletwo"
            element={<ChoosingScheduleTwo />}
          />
          <Route
            path="/choosingseatsbeforelogin"
            element={<ChoosingSeatsBeforeLogin />}
          />
          <Route path="/choosingschedule" element={<ChoosingSchedule />} />
          <Route path="/tixidnews" element={<TIXIDNews />} />
          <Route path="/tixidnewsone" element={<TIXIDNewsOne />} />
          <Route
            path="/konfirmasipembayaran"
            element={<KonfirmasiPembayaran />}
          />
          <Route path="/pilihjadwalone" element={<PilihJadwalOne />} />
          <Route path="/homepagetwo" element={<HomepageTwo />} />
          <Route path="/pilihkursi" element={<PilihKursi />} />
          <Route path="/pilihjadwal" element={<PilihJadwal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftarone" element={<DaftarOne />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
