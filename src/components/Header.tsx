import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="sticky top-0 pt-5 pb-5 max-w-full border-b-[1px] border-[#eaeaea] b-wi bg-[#f8f8f8]">
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="logo font-extrabold text-xl">
          <Link href="/">
            <svg
              width="164"
              height="27"
              viewBox="0 0 164 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.2393 10.674C60.1882 10.1584 59.9688 9.75781 59.581 9.4723C59.1932 9.18679 58.6669 9.04403 58.0021 9.04403C57.5504 9.04403 57.169 9.10795 56.858 9.2358C56.5469 9.35938 56.3082 9.53196 56.142 9.75355C55.9801 9.97514 55.8991 10.2266 55.8991 10.5078C55.8906 10.7422 55.9396 10.9467 56.0462 11.1214C56.157 11.2962 56.3082 11.4474 56.5 11.5753C56.6918 11.6989 56.9134 11.8075 57.1648 11.9013C57.4162 11.9908 57.6847 12.0675 57.9702 12.1314L59.1463 12.4126C59.7173 12.5405 60.2415 12.7109 60.7188 12.924C61.196 13.1371 61.6094 13.3991 61.9588 13.7102C62.3082 14.0213 62.5788 14.3878 62.7706 14.8097C62.9666 15.2315 63.0668 15.7152 63.071 16.2607C63.0668 17.0618 62.8622 17.7564 62.4574 18.3445C62.0568 18.9283 61.4773 19.3821 60.7188 19.706C59.9645 20.0256 59.0547 20.1854 57.9893 20.1854C56.9325 20.1854 56.0121 20.0234 55.228 19.6996C54.4482 19.3757 53.8388 18.8963 53.3999 18.2614C52.9652 17.6222 52.7372 16.8317 52.7159 15.8899H55.3942C55.424 16.3288 55.5497 16.6953 55.7713 16.9893C55.9972 17.2791 56.2976 17.4986 56.6726 17.6477C57.0518 17.7926 57.4801 17.8651 57.9574 17.8651C58.4261 17.8651 58.8331 17.7969 59.1783 17.6605C59.5277 17.5241 59.7983 17.3345 59.9901 17.0916C60.1818 16.8487 60.2777 16.5696 60.2777 16.2543C60.2777 15.9602 60.1903 15.7131 60.0156 15.5128C59.8452 15.3125 59.5938 15.142 59.2614 15.0014C58.9332 14.8608 58.5305 14.733 58.0533 14.6179L56.6278 14.2599C55.5241 13.9915 54.6527 13.5717 54.0135 13.0007C53.3743 12.4297 53.0568 11.6605 53.0611 10.6932C53.0568 9.90057 53.2678 9.2081 53.6939 8.61577C54.1243 8.02344 54.7145 7.56108 55.4645 7.22869C56.2145 6.89631 57.0668 6.73011 58.0213 6.73011C58.9929 6.73011 59.8409 6.89631 60.5653 7.22869C61.294 7.56108 61.8608 8.02344 62.2656 8.61577C62.6705 9.2081 62.8793 9.89418 62.892 10.674H60.2393ZM67.6046 14.3239V20H64.8816V10.1818H67.4767V11.9141H67.5918C67.8091 11.343 68.1735 10.8913 68.6848 10.5589C69.1962 10.2223 69.8162 10.054 70.5449 10.054C71.2267 10.054 71.8212 10.2031 72.3283 10.5014C72.8354 10.7997 73.2296 11.2259 73.5108 11.7798C73.7921 12.3295 73.9327 12.9858 73.9327 13.7486V20H71.2097V14.2344C71.214 13.6335 71.0605 13.1648 70.7495 12.8281C70.4384 12.4872 70.0101 12.3168 69.4647 12.3168C69.0982 12.3168 68.7743 12.3956 68.4931 12.5533C68.2161 12.7109 67.9988 12.9411 67.8411 13.2436C67.6877 13.5419 67.6088 13.902 67.6046 14.3239ZM76.0788 20V10.1818H78.8018V20H76.0788ZM77.4467 8.91619C77.0419 8.91619 76.6946 8.78196 76.4048 8.51349C76.1193 8.24077 75.9766 7.91477 75.9766 7.53551C75.9766 7.16051 76.1193 6.83878 76.4048 6.57031C76.6946 6.29758 77.0419 6.16122 77.4467 6.16122C77.8516 6.16122 78.1967 6.29758 78.4822 6.57031C78.772 6.83878 78.9169 7.16051 78.9169 7.53551C78.9169 7.91477 78.772 8.24077 78.4822 8.51349C78.1967 8.78196 77.8516 8.91619 77.4467 8.91619ZM80.9831 23.6818V10.1818H83.6678V11.831H83.7892C83.9086 11.5668 84.0811 11.2983 84.307 11.0256C84.5371 10.7486 84.8354 10.5185 85.2019 10.3352C85.5726 10.1477 86.0328 10.054 86.5826 10.054C87.2985 10.054 87.959 10.2415 88.5641 10.6165C89.1692 10.9872 89.6529 11.5476 90.0151 12.2976C90.3773 13.0433 90.5584 13.9787 90.5584 15.1037C90.5584 16.1989 90.3816 17.1236 90.0279 17.8778C89.6784 18.6278 89.2012 19.1967 88.5961 19.5845C87.9952 19.968 87.3219 20.1598 86.5762 20.1598C86.0478 20.1598 85.5982 20.0724 85.2275 19.8977C84.861 19.723 84.5605 19.5036 84.3262 19.2393C84.0918 18.9709 83.9128 18.7003 83.7892 18.4276H83.7061V23.6818H80.9831ZM83.6486 15.0909C83.6486 15.6747 83.7296 16.1839 83.8915 16.6186C84.0534 17.0533 84.2878 17.392 84.5946 17.6349C84.9015 17.8736 85.2743 17.9929 85.7132 17.9929C86.1564 17.9929 86.5314 17.8714 86.8382 17.6286C87.1451 17.3814 87.3773 17.0405 87.535 16.6058C87.6969 16.1669 87.7779 15.6619 87.7779 15.0909C87.7779 14.5241 87.699 14.0256 87.5414 13.5952C87.3837 13.1648 87.1515 12.8281 86.8446 12.5852C86.5378 12.3423 86.1607 12.2209 85.7132 12.2209C85.2701 12.2209 84.8951 12.3381 84.5882 12.5724C84.2857 12.8068 84.0534 13.1392 83.8915 13.5696C83.7296 14 83.6486 14.5071 83.6486 15.0909ZM92.3738 23.6818V10.1818H95.0584V11.831H95.1799C95.2992 11.5668 95.4718 11.2983 95.6976 11.0256C95.9277 10.7486 96.226 10.5185 96.5925 10.3352C96.9632 10.1477 97.4235 10.054 97.9732 10.054C98.6891 10.054 99.3496 10.2415 99.9547 10.6165C100.56 10.9872 101.044 11.5476 101.406 12.2976C101.768 13.0433 101.949 13.9787 101.949 15.1037C101.949 16.1989 101.772 17.1236 101.419 17.8778C101.069 18.6278 100.592 19.1967 99.9867 19.5845C99.3858 19.968 98.7125 20.1598 97.9668 20.1598C97.4384 20.1598 96.9888 20.0724 96.6181 19.8977C96.2516 19.723 95.9512 19.5036 95.7168 19.2393C95.4824 18.9709 95.3034 18.7003 95.1799 18.4276H95.0968V23.6818H92.3738ZM95.0392 15.0909C95.0392 15.6747 95.1202 16.1839 95.2821 16.6186C95.4441 17.0533 95.6784 17.392 95.9853 17.6349C96.2921 17.8736 96.665 17.9929 97.1039 17.9929C97.5471 17.9929 97.9221 17.8714 98.2289 17.6286C98.5357 17.3814 98.7679 17.0405 98.9256 16.6058C99.0875 16.1669 99.1685 15.6619 99.1685 15.0909C99.1685 14.5241 99.0897 14.0256 98.932 13.5952C98.7743 13.1648 98.5421 12.8281 98.2353 12.5852C97.9284 12.3423 97.5513 12.2209 97.1039 12.2209C96.6607 12.2209 96.2857 12.3381 95.9789 12.5724C95.6763 12.8068 95.4441 13.1392 95.2821 13.5696C95.1202 14 95.0392 14.5071 95.0392 15.0909ZM108.239 20.1918C107.229 20.1918 106.36 19.9872 105.631 19.5781C104.906 19.1648 104.348 18.581 103.956 17.8267C103.564 17.0682 103.368 16.1712 103.368 15.1357C103.368 14.1257 103.564 13.2393 103.956 12.4766C104.348 11.7138 104.9 11.1193 105.612 10.6932C106.328 10.267 107.167 10.054 108.13 10.054C108.778 10.054 109.381 10.1584 109.939 10.3672C110.502 10.5717 110.992 10.8807 111.409 11.294C111.831 11.7074 112.159 12.2273 112.394 12.8537C112.628 13.4759 112.745 14.2045 112.745 15.0398V15.7876H104.455V14.1001H110.182C110.182 13.7081 110.097 13.3608 109.926 13.0582C109.756 12.7557 109.519 12.5192 109.217 12.3487C108.919 12.174 108.571 12.0866 108.175 12.0866C107.762 12.0866 107.395 12.1825 107.075 12.3743C106.76 12.5618 106.513 12.8153 106.334 13.1349C106.155 13.4503 106.063 13.8018 106.059 14.1896V15.794C106.059 16.2798 106.149 16.6996 106.328 17.0533C106.511 17.407 106.769 17.6797 107.101 17.8714C107.433 18.0632 107.828 18.1591 108.284 18.1591C108.586 18.1591 108.863 18.1165 109.115 18.0312C109.366 17.946 109.581 17.8182 109.76 17.6477C109.939 17.4773 110.075 17.2685 110.169 17.0213L112.688 17.1875C112.56 17.7926 112.298 18.321 111.901 18.7727C111.509 19.2202 111.002 19.5696 110.38 19.821C109.762 20.0682 109.048 20.1918 108.239 20.1918ZM119.744 10.1818V12.2273H113.832V10.1818H119.744ZM115.174 7.82955H117.897V16.983C117.897 17.2344 117.936 17.4304 118.012 17.571C118.089 17.7074 118.195 17.8033 118.332 17.8587C118.472 17.9141 118.634 17.9418 118.818 17.9418C118.945 17.9418 119.073 17.9311 119.201 17.9098C119.329 17.8842 119.427 17.8651 119.495 17.8523L119.923 19.8786C119.787 19.9212 119.595 19.9702 119.348 20.0256C119.101 20.0852 118.801 20.1214 118.447 20.1342C117.791 20.1598 117.215 20.0724 116.721 19.8722C116.231 19.6719 115.85 19.3608 115.577 18.9389C115.304 18.517 115.17 17.9844 115.174 17.3409V7.82955ZM121.78 20V6.90909H124.503V11.831H124.586C124.706 11.5668 124.878 11.2983 125.104 11.0256C125.334 10.7486 125.633 10.5185 125.999 10.3352C126.37 10.1477 126.83 10.054 127.38 10.054C128.096 10.054 128.756 10.2415 129.361 10.6165C129.966 10.9872 130.45 11.5476 130.812 12.2976C131.175 13.0433 131.356 13.9787 131.356 15.1037C131.356 16.1989 131.179 17.1236 130.825 17.8778C130.476 18.6278 129.998 19.1967 129.393 19.5845C128.792 19.968 128.119 20.1598 127.373 20.1598C126.845 20.1598 126.395 20.0724 126.025 19.8977C125.658 19.723 125.358 19.5036 125.123 19.2393C124.889 18.9709 124.71 18.7003 124.586 18.4276H124.465V20H121.78ZM124.446 15.0909C124.446 15.6747 124.527 16.1839 124.689 16.6186C124.851 17.0533 125.085 17.392 125.392 17.6349C125.699 17.8736 126.072 17.9929 126.51 17.9929C126.954 17.9929 127.329 17.8714 127.635 17.6286C127.942 17.3814 128.175 17.0405 128.332 16.6058C128.494 16.1669 128.575 15.6619 128.575 15.0909C128.575 14.5241 128.496 14.0256 128.339 13.5952C128.181 13.1648 127.949 12.8281 127.642 12.5852C127.335 12.3423 126.958 12.2209 126.51 12.2209C126.067 12.2209 125.692 12.3381 125.385 12.5724C125.083 12.8068 124.851 13.1392 124.689 13.5696C124.527 14 124.446 14.5071 124.446 15.0909ZM135.972 20.1854C135.346 20.1854 134.788 20.0767 134.298 19.8594C133.808 19.6378 133.42 19.3118 133.134 18.8814C132.853 18.4467 132.712 17.9055 132.712 17.2578C132.712 16.7124 132.813 16.2543 133.013 15.8835C133.213 15.5128 133.486 15.2145 133.831 14.9886C134.176 14.7628 134.568 14.5923 135.007 14.4773C135.45 14.3622 135.915 14.2812 136.401 14.2344C136.972 14.1747 137.432 14.1193 137.781 14.0682C138.131 14.0128 138.384 13.9318 138.542 13.8253C138.7 13.7187 138.778 13.5611 138.778 13.3523V13.3139C138.778 12.9091 138.651 12.5959 138.395 12.3743C138.143 12.1527 137.786 12.0419 137.321 12.0419C136.831 12.0419 136.441 12.1506 136.151 12.3679C135.862 12.581 135.67 12.8494 135.576 13.1733L133.058 12.9688C133.185 12.3722 133.437 11.8565 133.812 11.4219C134.187 10.983 134.67 10.6463 135.263 10.4119C135.859 10.1733 136.55 10.054 137.334 10.054C137.879 10.054 138.401 10.1179 138.9 10.2457C139.403 10.3736 139.848 10.5717 140.236 10.8402C140.628 11.1087 140.937 11.4538 141.163 11.8757C141.388 12.2933 141.501 12.794 141.501 13.3778V20H138.919V18.6385H138.842C138.685 18.9453 138.474 19.2159 138.21 19.4503C137.945 19.6804 137.628 19.8615 137.257 19.9936C136.886 20.1214 136.458 20.1854 135.972 20.1854ZM136.752 18.3061C137.153 18.3061 137.506 18.2273 137.813 18.0696C138.12 17.9077 138.361 17.6903 138.536 17.4176C138.71 17.1449 138.798 16.8359 138.798 16.4908V15.4489C138.712 15.5043 138.595 15.5554 138.446 15.6023C138.301 15.6449 138.137 15.6854 137.954 15.7237C137.771 15.7578 137.587 15.7898 137.404 15.8196C137.221 15.8452 137.055 15.8686 136.906 15.8899C136.586 15.9368 136.307 16.0114 136.068 16.1136C135.83 16.2159 135.644 16.3544 135.512 16.5291C135.38 16.6996 135.314 16.9126 135.314 17.1683C135.314 17.5391 135.448 17.8224 135.717 18.0185C135.989 18.2102 136.335 18.3061 136.752 18.3061ZM151.783 12.9815L149.29 13.1349C149.248 12.9219 149.156 12.7301 149.015 12.5597C148.875 12.3849 148.689 12.2464 148.459 12.1442C148.233 12.0376 147.963 11.9844 147.647 11.9844C147.225 11.9844 146.87 12.0739 146.58 12.2528C146.29 12.4276 146.145 12.6619 146.145 12.956C146.145 13.1903 146.239 13.3885 146.426 13.5504C146.614 13.7124 146.936 13.8423 147.392 13.9403L149.169 14.2983C150.123 14.4943 150.835 14.8097 151.304 15.2443C151.772 15.679 152.007 16.25 152.007 16.9574C152.007 17.6009 151.817 18.1655 151.438 18.6513C151.063 19.1371 150.547 19.5163 149.891 19.7891C149.239 20.0575 148.487 20.1918 147.635 20.1918C146.335 20.1918 145.299 19.9212 144.528 19.38C143.761 18.8345 143.311 18.093 143.179 17.1555L145.858 17.0149C145.939 17.4112 146.135 17.7138 146.446 17.9226C146.757 18.1271 147.155 18.2294 147.641 18.2294C148.118 18.2294 148.502 18.1378 148.792 17.9545C149.086 17.767 149.235 17.5263 149.239 17.2322C149.235 16.9851 149.13 16.7827 148.926 16.625C148.721 16.4631 148.406 16.3395 147.98 16.2543L146.279 15.9155C145.321 15.7237 144.607 15.3913 144.138 14.9183C143.674 14.4453 143.441 13.8423 143.441 13.1094C143.441 12.4787 143.612 11.9354 143.953 11.4794C144.298 11.0234 144.782 10.6719 145.404 10.4247C146.03 10.1776 146.763 10.054 147.603 10.054C148.843 10.054 149.819 10.3161 150.53 10.8402C151.246 11.3643 151.664 12.0781 151.783 12.9815ZM158.196 20.1918C157.186 20.1918 156.317 19.9872 155.588 19.5781C154.863 19.1648 154.305 18.581 153.913 17.8267C153.521 17.0682 153.325 16.1712 153.325 15.1357C153.325 14.1257 153.521 13.2393 153.913 12.4766C154.305 11.7138 154.857 11.1193 155.569 10.6932C156.285 10.267 157.124 10.054 158.087 10.054C158.735 10.054 159.338 10.1584 159.896 10.3672C160.459 10.5717 160.949 10.8807 161.366 11.294C161.788 11.7074 162.116 12.2273 162.351 12.8537C162.585 13.4759 162.702 14.2045 162.702 15.0398V15.7876H154.412V14.1001H160.139C160.139 13.7081 160.054 13.3608 159.883 13.0582C159.713 12.7557 159.476 12.5192 159.174 12.3487C158.876 12.174 158.528 12.0866 158.132 12.0866C157.719 12.0866 157.352 12.1825 157.032 12.3743C156.717 12.5618 156.47 12.8153 156.291 13.1349C156.112 13.4503 156.02 13.8018 156.016 14.1896V15.794C156.016 16.2798 156.106 16.6996 156.285 17.0533C156.468 17.407 156.726 17.6797 157.058 17.8714C157.39 18.0632 157.785 18.1591 158.241 18.1591C158.543 18.1591 158.82 18.1165 159.072 18.0312C159.323 17.946 159.538 17.8182 159.717 17.6477C159.896 17.4773 160.032 17.2685 160.126 17.0213L162.645 17.1875C162.517 17.7926 162.255 18.321 161.858 18.7727C161.466 19.2202 160.959 19.5696 160.337 19.821C159.719 20.0682 159.006 20.1918 158.196 20.1918Z"
                fill="#222222"
              />
              <path
                d="M13.0458 26.7008C20.2509 26.7008 26.0917 20.86 26.0917 13.655C26.0917 6.44997 20.2509 0.609146 13.0458 0.609146C5.84082 0.609146 0 6.44997 0 13.655C0 20.86 5.84082 26.7008 13.0458 26.7008Z"
                fill="#222222"
              />
              <path
                d="M45.662 25.337C45.662 26.0576 45.0765 26.6484 44.3595 26.5765C41.3779 26.2774 38.5749 24.9582 36.4372 22.8206C33.9907 20.374 32.6162 17.0558 32.6162 13.5958C32.6162 10.1358 33.9907 6.81756 36.4372 4.37094C38.5749 2.23336 41.3779 0.914161 44.3595 0.615086C45.0765 0.543177 45.662 1.13404 45.662 1.85453V13.5958V25.337Z"
                fill="#222222"
              />
            </svg>
          </Link>
        </div>
        <div>
          <a
            className="text-sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nenadmarinkovic/snippetbase"
          >
            Want to contribute?
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
