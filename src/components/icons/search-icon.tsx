import { IconProps } from '@/types/icon';

export default function SearchIcon({ className, width, height, fill }: IconProps) {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path
        d="M0 0 C1.1088707 -0.01058945 1.1088707 -0.01058945 2.24014282 -0.02139282 C32.97641168 -0.24840581 32.97641168 -0.24840581 45.9765625 3.203125 C47.16427246 3.50911621 47.16427246 3.50911621 48.37597656 3.82128906 C74.61487163 10.73579651 97.8146255 22.75872863 117.80078125 41.21484375 C119.54657624 42.81019321 121.30944352 44.30248232 123.1640625 45.765625 C126.84237467 48.95349555 129.89135778 52.44589549 132.9765625 56.203125 C133.74097656 57.12996094 134.50539063 58.05679688 135.29296875 59.01171875 C155.70467573 84.33728029 169.84692488 117.27202046 170.21484375 150.0859375 C170.22468292 150.81420242 170.23452209 151.54246735 170.24465942 152.2928009 C170.58552664 184.08236483 165.9210874 215.88038527 147.9140625 243.015625 C145.74665791 245.86780349 145.74665791 245.86780349 146.16065693 248.18666649 C147.12639749 250.57343261 148.26154998 251.8470509 150.09355164 253.65396118 C150.75938766 254.31814056 151.42522369 254.98231995 152.11123657 255.66662598 C152.84627411 256.38459351 153.58131165 257.10256104 154.33862305 257.84228516 C155.10941696 258.60709198 155.88021088 259.3718988 156.67436218 260.15988159 C158.35116752 261.82191093 160.03138759 263.48050054 161.71457481 265.13606644 C164.38272685 267.76132046 167.0409831 270.39622982 169.69673157 273.0340271 C176.2995002 279.5886646 182.91603131 286.12934173 189.53790283 292.66467285 C195.12505317 298.17905034 200.70402456 303.70147659 206.27167702 309.23554611 C208.88174529 311.82352424 211.50324953 314.39953098 214.12516785 316.97549438 C215.73991599 318.57889695 217.35406751 320.18290066 218.9675293 321.78759766 C219.69244568 322.4934198 220.41736206 323.19924194 221.16424561 323.92645264 C229.03742028 331.8130961 234.84634694 340.62898091 235.2890625 352.015625 C235.0252968 362.24042474 231.38633423 369.71873573 224.27734375 376.92578125 C217.17556463 383.42111631 209.24700664 385.61808331 199.72265625 385.4765625 C186.6432241 384.17420084 177.64212812 375.21194513 168.87402344 366.23242188 C167.74293152 365.0873114 167.74293152 365.0873114 166.58898926 363.91906738 C164.96800753 362.27723449 163.34924912 360.63320402 161.73253632 358.98716736 C159.17432874 356.38463189 156.60801663 353.79035057 154.03912354 351.19836426 C146.74174127 343.83402081 139.45307652 336.46121216 132.18457031 329.06835938 C127.7260674 324.53474983 123.25321744 320.01573469 118.77069855 315.50587463 C117.06665677 313.78569714 115.36819209 312.05997658 113.67540741 310.32872009 C111.31761132 307.91822245 108.9420747 305.52666838 106.56152344 303.13867188 C105.86428162 302.41671631 105.16703979 301.69476074 104.44866943 300.95092773 C103.47341309 299.98370789 103.47341309 299.98370789 102.47845459 298.99694824 C101.9195541 298.42991936 101.36065361 297.86289047 100.78481674 297.27867889 C98.96139147 295.95529865 98.96139147 295.95529865 96.44226456 296.42841339 C93.20319533 297.44611321 90.61982721 299.05240092 87.7265625 300.828125 C74.73436426 308.50966899 60.58776153 313.56569467 45.9765625 317.203125 C44.09324219 317.68458984 44.09324219 317.68458984 42.171875 318.17578125 C19.67628932 323.19999131 -7.87311208 322.30858414 -30.0234375 316.203125 C-31.45937256 315.80843018 -31.45937256 315.80843018 -32.92431641 315.40576172 C-57.59752772 308.36822106 -79.18686065 296.61769335 -97.953125 279.12109375 C-99.65925404 277.54051005 -101.3862674 276.07838862 -103.2109375 274.640625 C-129.94973577 251.46699984 -146.55667281 212.82515983 -150.0234375 178.203125 C-150.13351888 175.52014147 -150.20942852 172.86235133 -150.2265625 170.1796875 C-150.23362213 169.44044037 -150.24068176 168.70119324 -150.24795532 167.93954468 C-150.47496831 137.20327582 -150.47496831 137.20327582 -147.0234375 124.203125 C-146.71744629 123.01541504 -146.71744629 123.01541504 -146.40527344 121.80371094 C-139.49076599 95.56481587 -127.46783387 72.365062 -109.01171875 52.37890625 C-107.41636929 50.63311126 -105.92408018 48.87024398 -104.4609375 47.015625 C-80.00630178 18.79873763 -36.94917535 0.23599172 0 0 Z M-67.0234375 79.203125 C-67.63703125 79.73164063 -68.250625 80.26015625 -68.8828125 80.8046875 C-83.18131889 94.08187201 -92.84539621 112.62886325 -98.0234375 131.203125 C-98.343125 132.28980469 -98.6628125 133.37648438 -98.9921875 134.49609375 C-103.25580759 151.64926901 -103.01169535 172.24707109 -98.0234375 189.203125 C-97.683125 190.42386719 -97.3428125 191.64460937 -96.9921875 192.90234375 C-88.30459715 221.45986204 -67.93100753 244.98116905 -41.87304688 259.21875 C-15.89666867 273.04355952 14.28134512 275.53250262 42.45288086 267.43847656 C59.07772219 262.23456352 73.92941073 252.56809682 86.9765625 241.203125 C87.59015625 240.67460937 88.20375 240.14609375 88.8359375 239.6015625 C103.13444389 226.32437799 112.79852121 207.77738675 117.9765625 189.203125 C118.29625 188.11644531 118.6159375 187.02976563 118.9453125 185.91015625 C123.20893259 168.75698099 122.96482035 148.15917891 117.9765625 131.203125 C117.63625 129.98238281 117.2959375 128.76164062 116.9453125 127.50390625 C108.30943929 99.1163906 87.96825137 75.31625923 61.9765625 61.203125 C18.3747484 38.3347089 -30.74217295 47.59963355 -67.0234375 79.203125 Z "
        fill={fill}
        transform="translate(214.0234375,63.796875)"
      />
    </svg>
  );
}
