import { createContext, useContext, useState, useEffect } from "react";

const ecommerceContext = createContext(null);

const EcommerceContextProvider = ({ children }) => {
  //   const [loading, setLoading] = useState(false);
  //   const [singleUser, setSingleUser] = useState([]);
  //   const [attendanceTable, setAttendanceTable] = useState([]);
  //   const { countUpTime, startTimer, stopTimer, resetTimer } = useCountUpTimer();
  //   const [allUsers, setAllUsers] = useState([]);

  //   const storedIsCheckedIn = localStorage.getItem("isCheckedIn") === "true";
  //   const [isCheckedIn, setIsCheckedIn] = useState(storedIsCheckedIn);

  //   const handleButtonClick = () => {
  //     if (!isCheckedIn) {
  //       checkInUser();
  //     } else {
  //       checkOutUser();
  //     }
  //   };

  //   const checkInUser = () => {
  //     setIsCheckedIn(true);
  //     localStorage.setItem("isCheckedIn", true);
  //     localStorage.setItem("startTime", Date.now().toString());
  //     startTimer();
  //   };

  //   const checkOutUser = () => {
  //     setIsCheckedIn(false);
  //     resetTimer();
  //     stopTimer();
  //     localStorage.removeItem("isCheckedIn");
  //     localStorage.removeItem("startTime");
  //   };

  //   const checkAutoCheckout = () => {
  //     const startTime = localStorage.getItem("startTime");
  //     if (startTime) {
  //       const now = Date.now();
  //       const timeDifference = now - parseInt(startTime, 10);
  //       const hoursDifference = timeDifference / (1000 * 60 * 60);

  //       if (hoursDifference >= 24) {
  //         checkOutUser();
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     if (isCheckedIn) {
  //       checkAutoCheckout();

  //       const interval = setInterval(() => {
  //         checkAutoCheckout();
  //       }, 60000);

  //       return () => clearInterval(interval);
  //     }
  //   }, [isCheckedIn]);

  return (
    <EcommerceContext.Provider
      value={
        {
          // loading,
          // setLoading,
          // countUpTime,
          // isCheckedIn,
          // handleButtonClick,
          // singleUser,
          // setSingleUser,
          // attendanceTable,
          // setAttendanceTable,
          // allUsers,
          // setAllUsers,
        }
      }
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export { ecommerceContext, EcommerceContextProvider };

export const useEcommerce = () => {
  const context = useContext(ecommerceContext);
  if (!context) {
    throw new Error(
      "useEcommerce must be used within an EcommerceContextProvider"
    );
  }
  return context;
};
