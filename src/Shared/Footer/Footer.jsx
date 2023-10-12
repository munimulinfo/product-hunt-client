import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  lg:px-16 md:px-8 px-4 pt-20 pb-10">
        <div className="space-y-4">
          <img className="h-14" src={logo} alt="" />
          <div className="space-y-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been since the printer took.
            </p>
            <button className="border border-orange-500 px-3 py-2 rounded-md">
              Appointment
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <div className="space-y-2 mt-2">
            <p>About Us</p>
            <p>Service</p>
            <p>Doctors</p>
            <p>Departments</p>
            <p>Online Payment</p>
            <p>Contact Us</p>
            <p>My Account</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Doc House Services</h1>
          <div className="space-y-2 mt-2">
            <p>Pediatric Clinic</p>
            <p>Diagnosis Clinic</p>
            <p>Cardiac Clinic</p>
            <p>Laboratory Analysis</p>
            <p>Gynecological Clinic</p>
            <p>Personal Counseling</p>
            <p>Dental Clinic</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">QWorking Hours</h1>
          <div className="space-y-2 mt-2">
            <p>Monday - 10 am to 7 pm</p>
            <p>Tuesday - 10 am to 7 pm</p>
            <p>Wednesday - 10 am to 7 pm</p>
            <p>Thursday - 10 am to 7 pm</p>
            <p>Friday - 10 am to 7 pm</p>
            <p>Saturday - 10 am to 7 pm</p>
            <p>Sunday - 10 am to 7 pm</p>
          </div>
        </div>
      </div>
      
      <p className="text-center pb-5 border-t-[1px] pt-2 border-black">
        Copyright © 2022 - All right reserved by Doc House Ltd
      </p>
    </div>
  );
};

export default Footer;
