import React from "react";
import {
  HeaderWrap,
  HeaderLogo,
  HeaderInfo,
} from "../styles/components/header";

function Header() {
  const today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date =
    weekday[today.getDay()] +
    " — " +
    today.getDay() +
    "." +
    (today.getMonth() + 1) +
    "." +
    today.getFullYear();

  return (
    <HeaderWrap>
      <HeaderLogo>
        <svg
          width="135"
          height="24"
          viewBox="0 0 135 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.2393 8.67401C31.1882 8.15838 30.9688 7.75781 30.581 7.4723C30.1932 7.18679 29.6669 7.04403 29.0021 7.04403C28.5504 7.04403 28.169 7.10795 27.858 7.2358C27.5469 7.35937 27.3082 7.53196 27.142 7.75355C26.9801 7.97514 26.8991 8.22656 26.8991 8.50781C26.8906 8.74219 26.9396 8.94673 27.0462 9.12145C27.157 9.29616 27.3082 9.44744 27.5 9.57528C27.6918 9.69886 27.9134 9.80753 28.1648 9.90128C28.4162 9.99077 28.6847 10.0675 28.9702 10.1314L30.1463 10.4126C30.7173 10.5405 31.2415 10.7109 31.7188 10.924C32.196 11.1371 32.6094 11.3991 32.9588 11.7102C33.3082 12.0213 33.5788 12.3878 33.7706 12.8097C33.9666 13.2315 34.0668 13.7152 34.071 14.2607C34.0668 15.0618 33.8622 15.7564 33.4574 16.3445C33.0568 16.9283 32.4773 17.3821 31.7188 17.706C30.9645 18.0256 30.0547 18.1854 28.9893 18.1854C27.9325 18.1854 27.0121 18.0234 26.228 17.6996C25.4482 17.3757 24.8388 16.8963 24.3999 16.2614C23.9652 15.6222 23.7372 14.8317 23.7159 13.8899H26.3942C26.424 14.3288 26.5497 14.6953 26.7713 14.9893C26.9972 15.2791 27.2976 15.4986 27.6726 15.6477C28.0518 15.7926 28.4801 15.8651 28.9574 15.8651C29.4261 15.8651 29.8331 15.7969 30.1783 15.6605C30.5277 15.5241 30.7983 15.3345 30.9901 15.0916C31.1818 14.8487 31.2777 14.5696 31.2777 14.2543C31.2777 13.9602 31.1903 13.7131 31.0156 13.5128C30.8452 13.3125 30.5938 13.142 30.2614 13.0014C29.9332 12.8608 29.5305 12.733 29.0533 12.6179L27.6278 12.2599C26.5241 11.9915 25.6527 11.5717 25.0135 11.0007C24.3743 10.4297 24.0568 9.66051 24.0611 8.69318C24.0568 7.90057 24.2678 7.2081 24.6939 6.61577C25.1243 6.02344 25.7145 5.56108 26.4645 5.22869C27.2145 4.89631 28.0668 4.73011 29.0213 4.73011C29.9929 4.73011 30.8409 4.89631 31.5653 5.22869C32.294 5.56108 32.8608 6.02344 33.2656 6.61577C33.6705 7.2081 33.8793 7.89418 33.892 8.67401H31.2393ZM38.6046 12.3239V18H35.8816V8.18182H38.4767V9.91406H38.5918C38.8091 9.34304 39.1735 8.89133 39.6848 8.55895C40.1962 8.2223 40.8162 8.05398 41.5449 8.05398C42.2267 8.05398 42.8212 8.20312 43.3283 8.50142C43.8354 8.79972 44.2296 9.22585 44.5108 9.77983C44.7921 10.3295 44.9327 10.9858 44.9327 11.7486V18H42.2097V12.2344C42.214 11.6335 42.0605 11.1648 41.7495 10.8281C41.4384 10.4872 41.0101 10.3168 40.4647 10.3168C40.0982 10.3168 39.7743 10.3956 39.4931 10.5533C39.2161 10.7109 38.9988 10.9411 38.8411 11.2436C38.6877 11.5419 38.6088 11.902 38.6046 12.3239ZM47.0788 18V8.18182H49.8018V18H47.0788ZM48.4467 6.91619C48.0419 6.91619 47.6946 6.78196 47.4048 6.51349C47.1193 6.24077 46.9766 5.91477 46.9766 5.53551C46.9766 5.16051 47.1193 4.83878 47.4048 4.57031C47.6946 4.29758 48.0419 4.16122 48.4467 4.16122C48.8516 4.16122 49.1967 4.29758 49.4822 4.57031C49.772 4.83878 49.9169 5.16051 49.9169 5.53551C49.9169 5.91477 49.772 6.24077 49.4822 6.51349C49.1967 6.78196 48.8516 6.91619 48.4467 6.91619ZM51.9831 21.6818V8.18182H54.6678V9.83097H54.7892C54.9086 9.56676 55.0811 9.2983 55.307 9.02557C55.5371 8.74858 55.8354 8.51847 56.2019 8.33523C56.5726 8.14773 57.0328 8.05398 57.5826 8.05398C58.2985 8.05398 58.959 8.24148 59.5641 8.61648C60.1692 8.98722 60.6529 9.54759 61.0151 10.2976C61.3773 11.0433 61.5584 11.9787 61.5584 13.1037C61.5584 14.1989 61.3816 15.1236 61.0279 15.8778C60.6784 16.6278 60.2012 17.1967 59.5961 17.5845C58.9952 17.968 58.3219 18.1598 57.5762 18.1598C57.0478 18.1598 56.5982 18.0724 56.2275 17.8977C55.861 17.723 55.5605 17.5036 55.3262 17.2393C55.0918 16.9709 54.9128 16.7003 54.7892 16.4276H54.7061V21.6818H51.9831ZM54.6486 13.0909C54.6486 13.6747 54.7296 14.1839 54.8915 14.6186C55.0534 15.0533 55.2878 15.392 55.5946 15.6349C55.9015 15.8736 56.2743 15.9929 56.7132 15.9929C57.1564 15.9929 57.5314 15.8714 57.8382 15.6286C58.1451 15.3814 58.3773 15.0405 58.535 14.6058C58.6969 14.1669 58.7779 13.6619 58.7779 13.0909C58.7779 12.5241 58.699 12.0256 58.5414 11.5952C58.3837 11.1648 58.1515 10.8281 57.8446 10.5852C57.5378 10.3423 57.1607 10.2209 56.7132 10.2209C56.2701 10.2209 55.8951 10.3381 55.5882 10.5724C55.2857 10.8068 55.0534 11.1392 54.8915 11.5696C54.7296 12 54.6486 12.5071 54.6486 13.0909ZM63.3738 21.6818V8.18182H66.0584V9.83097H66.1799C66.2992 9.56676 66.4718 9.2983 66.6976 9.02557C66.9277 8.74858 67.226 8.51847 67.5925 8.33523C67.9632 8.14773 68.4235 8.05398 68.9732 8.05398C69.6891 8.05398 70.3496 8.24148 70.9547 8.61648C71.5598 8.98722 72.0435 9.54759 72.4057 10.2976C72.7679 11.0433 72.949 11.9787 72.949 13.1037C72.949 14.1989 72.7722 15.1236 72.4185 15.8778C72.0691 16.6278 71.5918 17.1967 70.9867 17.5845C70.3858 17.968 69.7125 18.1598 68.9668 18.1598C68.4384 18.1598 67.9888 18.0724 67.6181 17.8977C67.2516 17.723 66.9512 17.5036 66.7168 17.2393C66.4824 16.9709 66.3034 16.7003 66.1799 16.4276H66.0968V21.6818H63.3738ZM66.0392 13.0909C66.0392 13.6747 66.1202 14.1839 66.2821 14.6186C66.4441 15.0533 66.6784 15.392 66.9853 15.6349C67.2921 15.8736 67.665 15.9929 68.1039 15.9929C68.5471 15.9929 68.9221 15.8714 69.2289 15.6286C69.5357 15.3814 69.7679 15.0405 69.9256 14.6058C70.0875 14.1669 70.1685 13.6619 70.1685 13.0909C70.1685 12.5241 70.0897 12.0256 69.932 11.5952C69.7743 11.1648 69.5421 10.8281 69.2353 10.5852C68.9284 10.3423 68.5513 10.2209 68.1039 10.2209C67.6607 10.2209 67.2857 10.3381 66.9789 10.5724C66.6763 10.8068 66.4441 11.1392 66.2821 11.5696C66.1202 12 66.0392 12.5071 66.0392 13.0909ZM79.2388 18.1918C78.2289 18.1918 77.3596 17.9872 76.6309 17.5781C75.9064 17.1648 75.3482 16.581 74.9561 15.8267C74.5641 15.0682 74.3681 14.1712 74.3681 13.1357C74.3681 12.1257 74.5641 11.2393 74.9561 10.4766C75.3482 9.71378 75.9 9.11932 76.6117 8.69318C77.3276 8.26705 78.1671 8.05398 79.1301 8.05398C79.7779 8.05398 80.3809 8.15838 80.9391 8.36719C81.5016 8.57173 81.9917 8.88068 82.4093 9.29403C82.8311 9.70739 83.1593 10.2273 83.3936 10.8537C83.628 11.4759 83.7452 12.2045 83.7452 13.0398V13.7876H75.4547V12.1001H81.182C81.182 11.7081 81.0968 11.3608 80.9263 11.0582C80.7559 10.7557 80.5194 10.5192 80.2168 10.3487C79.9185 10.174 79.5712 10.0866 79.1749 10.0866C78.7615 10.0866 78.3951 10.1825 78.0755 10.3743C77.7601 10.5618 77.513 10.8153 77.334 11.1349C77.155 11.4503 77.0634 11.8018 77.0591 12.1896V13.794C77.0591 14.2798 77.1486 14.6996 77.3276 15.0533C77.5108 15.407 77.7686 15.6797 78.101 15.8714C78.4334 16.0632 78.8276 16.1591 79.2836 16.1591C79.5861 16.1591 79.8631 16.1165 80.1145 16.0312C80.3659 15.946 80.5811 15.8182 80.7601 15.6477C80.9391 15.4773 81.0755 15.2685 81.1692 15.0213L83.6877 15.1875C83.5598 15.7926 83.2978 16.321 82.9015 16.7727C82.5094 17.2202 82.0023 17.5696 81.3801 17.821C80.7623 18.0682 80.0485 18.1918 79.2388 18.1918ZM90.7445 8.18182V10.2273H84.8319V8.18182H90.7445ZM86.1742 5.82955H88.8972V14.983C88.8972 15.2344 88.9355 15.4304 89.0123 15.571C89.089 15.7074 89.1955 15.8033 89.3319 15.8587C89.4725 15.9141 89.6344 15.9418 89.8176 15.9418C89.9455 15.9418 90.0733 15.9311 90.2012 15.9098C90.329 15.8842 90.427 15.8651 90.4952 15.8523L90.9235 17.8786C90.7871 17.9212 90.5953 17.9702 90.3482 18.0256C90.101 18.0852 89.8006 18.1214 89.4469 18.1342C88.7907 18.1598 88.2154 18.0724 87.7211 17.8722C87.231 17.6719 86.8496 17.3608 86.5769 16.9389C86.3042 16.517 86.1699 15.9844 86.1742 15.3409V5.82955ZM92.7804 18V4.90909H95.5034V9.83097H95.5865C95.7058 9.56676 95.8784 9.2983 96.1042 9.02557C96.3343 8.74858 96.6326 8.51847 96.9991 8.33523C97.3699 8.14773 97.8301 8.05398 98.3798 8.05398C99.0957 8.05398 99.7562 8.24148 100.361 8.61648C100.966 8.98722 101.45 9.54759 101.812 10.2976C102.175 11.0433 102.356 11.9787 102.356 13.1037C102.356 14.1989 102.179 15.1236 101.825 15.8778C101.476 16.6278 100.998 17.1967 100.393 17.5845C99.7924 17.968 99.1191 18.1598 98.3734 18.1598C97.845 18.1598 97.3954 18.0724 97.0247 17.8977C96.6582 17.723 96.3578 17.5036 96.1234 17.2393C95.889 16.9709 95.71 16.7003 95.5865 16.4276H95.465V18H92.7804ZM95.4458 13.0909C95.4458 13.6747 95.5268 14.1839 95.6887 14.6186C95.8507 15.0533 96.085 15.392 96.3919 15.6349C96.6987 15.8736 97.0716 15.9929 97.5105 15.9929C97.9537 15.9929 98.3287 15.8714 98.6355 15.6286C98.9423 15.3814 99.1745 15.0405 99.3322 14.6058C99.4941 14.1669 99.5751 13.6619 99.5751 13.0909C99.5751 12.5241 99.4963 12.0256 99.3386 11.5952C99.1809 11.1648 98.9487 10.8281 98.6419 10.5852C98.335 10.3423 97.9579 10.2209 97.5105 10.2209C97.0673 10.2209 96.6923 10.3381 96.3855 10.5724C96.0829 10.8068 95.8507 11.1392 95.6887 11.5696C95.5268 12 95.4458 12.5071 95.4458 13.0909ZM106.972 18.1854C106.346 18.1854 105.788 18.0767 105.298 17.8594C104.808 17.6378 104.42 17.3118 104.134 16.8814C103.853 16.4467 103.712 15.9055 103.712 15.2578C103.712 14.7124 103.813 14.2543 104.013 13.8835C104.213 13.5128 104.486 13.2145 104.831 12.9886C105.176 12.7628 105.568 12.5923 106.007 12.4773C106.45 12.3622 106.915 12.2812 107.401 12.2344C107.972 12.1747 108.432 12.1193 108.781 12.0682C109.131 12.0128 109.384 11.9318 109.542 11.8253C109.7 11.7187 109.778 11.5611 109.778 11.3523V11.3139C109.778 10.9091 109.651 10.5959 109.395 10.3743C109.143 10.1527 108.786 10.0419 108.321 10.0419C107.831 10.0419 107.441 10.1506 107.151 10.3679C106.862 10.581 106.67 10.8494 106.576 11.1733L104.058 10.9688C104.185 10.3722 104.437 9.85653 104.812 9.42188C105.187 8.98295 105.67 8.64631 106.263 8.41193C106.859 8.1733 107.55 8.05398 108.334 8.05398C108.879 8.05398 109.401 8.1179 109.9 8.24574C110.403 8.37358 110.848 8.57173 111.236 8.8402C111.628 9.10866 111.937 9.45384 112.163 9.87571C112.388 10.2933 112.501 10.794 112.501 11.3778V18H109.919V16.6385H109.842C109.685 16.9453 109.474 17.2159 109.21 17.4503C108.945 17.6804 108.628 17.8615 108.257 17.9936C107.886 18.1214 107.458 18.1854 106.972 18.1854ZM107.752 16.3061C108.153 16.3061 108.506 16.2273 108.813 16.0696C109.12 15.9077 109.361 15.6903 109.536 15.4176C109.71 15.1449 109.798 14.8359 109.798 14.4908V13.4489C109.712 13.5043 109.595 13.5554 109.446 13.6023C109.301 13.6449 109.137 13.6854 108.954 13.7237C108.771 13.7578 108.587 13.7898 108.404 13.8196C108.221 13.8452 108.055 13.8686 107.906 13.8899C107.586 13.9368 107.307 14.0114 107.068 14.1136C106.83 14.2159 106.644 14.3544 106.512 14.5291C106.38 14.6996 106.314 14.9126 106.314 15.1683C106.314 15.5391 106.448 15.8224 106.717 16.0185C106.989 16.2102 107.335 16.3061 107.752 16.3061ZM122.783 10.9815L120.29 11.1349C120.248 10.9219 120.156 10.7301 120.015 10.5597C119.875 10.3849 119.689 10.2464 119.459 10.1442C119.233 10.0376 118.963 9.98438 118.647 9.98438C118.225 9.98438 117.87 10.0739 117.58 10.2528C117.29 10.4276 117.145 10.6619 117.145 10.956C117.145 11.1903 117.239 11.3885 117.426 11.5504C117.614 11.7124 117.936 11.8423 118.392 11.9403L120.169 12.2983C121.123 12.4943 121.835 12.8097 122.304 13.2443C122.772 13.679 123.007 14.25 123.007 14.9574C123.007 15.6009 122.817 16.1655 122.438 16.6513C122.063 17.1371 121.547 17.5163 120.891 17.7891C120.239 18.0575 119.487 18.1918 118.635 18.1918C117.335 18.1918 116.299 17.9212 115.528 17.38C114.761 16.8345 114.311 16.093 114.179 15.1555L116.858 15.0149C116.939 15.4112 117.135 15.7138 117.446 15.9226C117.757 16.1271 118.155 16.2294 118.641 16.2294C119.118 16.2294 119.502 16.1378 119.792 15.9545C120.086 15.767 120.235 15.5263 120.239 15.2322C120.235 14.9851 120.13 14.7827 119.926 14.625C119.721 14.4631 119.406 14.3395 118.98 14.2543L117.279 13.9155C116.321 13.7237 115.607 13.3913 115.138 12.9183C114.674 12.4453 114.441 11.8423 114.441 11.1094C114.441 10.4787 114.612 9.93537 114.953 9.4794C115.298 9.02344 115.782 8.67188 116.404 8.42472C117.03 8.17756 117.763 8.05398 118.603 8.05398C119.843 8.05398 120.819 8.31605 121.53 8.8402C122.246 9.36435 122.664 10.0781 122.783 10.9815ZM129.196 18.1918C128.186 18.1918 127.317 17.9872 126.588 17.5781C125.863 17.1648 125.305 16.581 124.913 15.8267C124.521 15.0682 124.325 14.1712 124.325 13.1357C124.325 12.1257 124.521 11.2393 124.913 10.4766C125.305 9.71378 125.857 9.11932 126.569 8.69318C127.285 8.26705 128.124 8.05398 129.087 8.05398C129.735 8.05398 130.338 8.15838 130.896 8.36719C131.459 8.57173 131.949 8.88068 132.366 9.29403C132.788 9.70739 133.116 10.2273 133.351 10.8537C133.585 11.4759 133.702 12.2045 133.702 13.0398V13.7876H125.412V12.1001H131.139C131.139 11.7081 131.054 11.3608 130.883 11.0582C130.713 10.7557 130.476 10.5192 130.174 10.3487C129.876 10.174 129.528 10.0866 129.132 10.0866C128.719 10.0866 128.352 10.1825 128.032 10.3743C127.717 10.5618 127.47 10.8153 127.291 11.1349C127.112 11.4503 127.02 11.8018 127.016 12.1896V13.794C127.016 14.2798 127.106 14.6996 127.285 15.0533C127.468 15.407 127.726 15.6797 128.058 15.8714C128.39 16.0632 128.785 16.1591 129.241 16.1591C129.543 16.1591 129.82 16.1165 130.072 16.0312C130.323 15.946 130.538 15.8182 130.717 15.6477C130.896 15.4773 131.032 15.2685 131.126 15.0213L133.645 15.1875C133.517 15.7926 133.255 16.321 132.858 16.7727C132.466 17.2202 131.959 17.5696 131.337 17.821C130.719 18.0682 130.006 18.1918 129.196 18.1918Z"
            fill="#fff"
          />
          <path
            d="M17.5 6.125C17.5 8.403 13.806 10.25 9.25 10.25C4.694 10.25 1 8.403 1 6.125M17.5 6.125C17.5 3.847 13.806 2 9.25 2C4.694 2 1 3.847 1 6.125M17.5 6.125V17.375C17.5 19.653 13.806 21.5 9.25 21.5C4.694 21.5 1 19.653 1 17.375V6.125M17.5 6.125V9.875M1 6.125V9.875M17.5 9.875V13.625C17.5 15.903 13.806 17.75 9.25 17.75C4.694 17.75 1 15.903 1 13.625V9.875M17.5 9.875C17.5 12.153 13.806 14 9.25 14C4.694 14 1 12.153 1 9.875"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeaderLogo>

      <HeaderInfo>
        <span>{date}</span>
      </HeaderInfo>
    </HeaderWrap>
  );
}

export default Header;