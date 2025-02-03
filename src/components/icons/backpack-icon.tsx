import { IconProps } from '@/types/icon';

export default function BackpackIcon({ className, width, height, fill }: IconProps) {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M0 0 C2.27862197 -0.00456961 4.55724257 -0.00987748 6.83586121 -0.0158844 C11.59741841 -0.02478616 16.35880764 -0.02242647 21.12036133 -0.01245117 C27.18562605 -0.00097528 33.25030734 -0.02116757 39.31549549 -0.05036831 C44.01791494 -0.06882369 48.72019704 -0.06841913 53.42264366 -0.06273079 C55.65707911 -0.06257866 57.89152452 -0.06853182 60.12592506 -0.08102226 C82.58381783 -0.18888361 101.33070467 3.18750556 117.9453125 19.609375 C131.81890103 34.33860335 136.17239917 51.36730331 135.79296875 71.18359375 C135.77787459 72.57420404 135.76419466 73.96483042 135.75195312 75.35546875 C135.71695523 78.71526709 135.66785728 82.07421149 135.60546875 85.43359375 C136.45134552 85.42693192 137.29722229 85.42027008 138.16873169 85.41340637 C146.19935437 85.35291768 154.22989887 85.30742944 162.26069832 85.27815723 C166.38792891 85.26260145 170.5149689 85.24155141 174.64208984 85.20727539 C178.63622749 85.17431711 182.63018357 85.15666523 186.62444687 85.14896202 C188.13683805 85.1434831 189.649221 85.13278749 191.16153336 85.11640358 C203.92595786 84.98380826 216.39142785 85.96572004 227.85546875 92.12109375 C228.52384766 92.46994629 229.19222656 92.81879883 229.88085938 93.17822266 C245.30191315 101.47355762 255.51832924 114.23404217 261.39875221 130.64785767 C264.53729666 141.22174498 264.02661734 151.98294247 263.99365234 162.90234375 C263.99772263 165.17033134 264.00306706 167.43831694 264.00958252 169.70629883 C264.02320751 175.83847966 264.01797734 181.97050831 264.00844526 188.10269165 C264.00082368 194.53526199 264.0079012 200.96781974 264.01260376 207.40039062 C264.01840265 218.89134755 264.00910872 230.38222702 263.99382575 241.87317181 C263.98042433 252.27095073 263.98275297 262.66862914 263.99658203 273.06640625 C264.01267244 285.16993628 264.01859359 297.27338751 264.00974524 309.37693024 C264.00508013 315.77336539 264.00441187 322.16973146 264.01435471 328.56616211 C264.02305223 334.58107355 264.01695152 340.59579611 263.99967194 346.61068726 C263.99572197 348.81163215 263.99681543 351.01259308 264.00345993 353.21353149 C264.0616691 374.46192066 264.0616691 374.46192066 260.60546875 384.43359375 C260.31576895 385.3198645 260.02606915 386.20613525 259.72759056 387.1192627 C254.57339478 402.25058997 242.17821467 413.83360535 228.68359375 421.64453125 C217.80466881 426.83174302 207.08860091 428.02227849 195.19726562 427.94152832 C193.6937271 427.94614886 192.19019312 427.95250945 190.6866684 427.9604373 C186.59502944 427.97699574 182.50376801 427.96894645 178.41212845 427.95649242 C173.98395599 427.94738843 169.55584544 427.96143801 165.12768555 427.97241211 C156.46869777 427.99014516 147.80984912 427.98638067 139.15085602 427.97476155 C132.10991784 427.9657069 125.06901851 427.96451199 118.02807617 427.96885681 C117.02378366 427.96946974 116.01949115 427.97008268 114.98476553 427.97071418 C112.94419923 427.97199316 110.90363295 427.97329001 108.86306667 427.97460455 C89.75440188 427.98599507 70.645814 427.97292064 51.53716183 427.95140308 C35.1614548 427.9335335 18.78586123 427.93663804 2.41015625 427.95507812 C-16.63280859 427.97651185 -35.67570612 427.98489658 -54.71868134 427.97262907 C-56.75150044 427.97135495 -58.78431955 427.97009747 -60.81713867 427.96885681 C-62.31719318 427.96793116 -62.31719318 427.96793116 -63.84755182 427.96698681 C-70.8753538 427.96354141 -77.90311287 427.96934473 -84.9309082 427.97877502 C-93.50216007 427.99002423 -102.07326552 427.98689374 -110.64450073 427.96565205 C-115.01288912 427.95518083 -119.38103389 427.95095228 -123.74942017 427.96424866 C-127.75654617 427.97626046 -131.76320516 427.96946718 -135.77028942 427.94833845 C-137.21155943 427.94390927 -138.65286977 427.94605459 -140.09411335 427.9558416 C-157.93101794 428.06757403 -173.04636493 423.15664933 -186.05078125 410.76953125 C-186.82421875 409.99867188 -187.59765625 409.2278125 -188.39453125 408.43359375 C-189.461875 407.40105469 -189.461875 407.40105469 -190.55078125 406.34765625 C-206.0316718 390.33088872 -206.84634072 370.88852059 -206.78271484 349.95898438 C-206.78678597 347.70232388 -206.79213088 345.44566538 -206.79864502 343.18901062 C-206.81225994 337.09194437 -206.80704405 330.99503132 -206.79750776 324.89796257 C-206.78988092 318.49923177 -206.79696515 312.10051357 -206.80166626 305.70178223 C-206.80746343 294.27193025 -206.7981753 282.84216266 -206.78288825 271.41232497 C-206.7694871 261.07286333 -206.77181582 250.73350278 -206.78564453 240.39404297 C-206.80174014 228.35422229 -206.80765333 216.31447782 -206.79880774 204.27464247 C-206.79414502 197.91340174 -206.79346774 191.55223046 -206.80341721 185.19099426 C-206.81212111 179.20889716 -206.80600252 173.22698983 -206.78873444 167.2449131 C-206.78478785 165.05728787 -206.78587206 162.8696465 -206.79252243 160.68202782 C-206.85415682 138.33734599 -203.58340445 120.23487498 -187.39453125 103.43359375 C-174.62377193 91.3559842 -158.65543975 85.28845648 -141.17407227 85.32006836 C-140.49030014 85.31992233 -139.80652802 85.31977631 -139.10203552 85.31962585 C-136.86746928 85.3203162 -134.63298897 85.32806698 -132.3984375 85.3359375 C-130.83902532 85.3378048 -129.27961256 85.33922723 -127.72019958 85.34022522 C-123.63496249 85.34402579 -119.5497615 85.35383484 -115.46453857 85.3649292 C-111.28821297 85.37519644 -107.11188149 85.37973418 -102.93554688 85.38476562 C-94.75519185 85.39545952 -86.57486605 85.4125061 -78.39453125 85.43359375 C-78.40271378 84.56964493 -78.4108963 83.70569611 -78.41932678 82.81556702 C-78.44615062 79.57257196 -78.46564158 76.32963397 -78.48036194 73.08656311 C-78.48816015 71.68999863 -78.49877745 70.29344664 -78.5124054 68.89692688 C-78.69529855 49.65613696 -74.1295997 33.82090083 -60.65405273 19.54589844 C-43.42316335 2.11277545 -23.27203256 -0.04101094 0 0 Z M-31.39453125 52.43359375 C-37.71361522 62.75476424 -35.39453125 73.00904795 -35.39453125 85.43359375 C6.84546875 85.43359375 49.08546875 85.43359375 92.60546875 85.43359375 C93.78449768 65.36006649 93.78449768 65.36006649 85.21484375 48.87109375 C79.06928865 43.38186007 71.92409377 43.28351804 64.10253906 43.27246094 C62.8356575 43.26501358 62.8356575 43.26501358 61.54318237 43.25741577 C58.75664445 43.24284411 55.97016347 43.23600017 53.18359375 43.23046875 C51.23931884 43.2247128 49.29504394 43.21895513 47.35076904 43.2131958 C43.27551002 43.20269975 39.20027063 43.19684808 35.125 43.19335938 C29.91885722 43.18788029 24.7129767 43.1638588 19.50691605 43.13538742 C15.49016577 43.11670597 11.47347796 43.11155249 7.45668793 43.1100235 C5.5382621 43.10700843 3.61983708 43.09901887 1.70145416 43.08583832 C-0.99057104 43.06866378 -3.68196475 43.07068579 -6.37402344 43.07714844 C-7.54800186 43.06332626 -7.54800186 43.06332626 -8.74569702 43.04922485 C-17.69290541 43.11605549 -25.35732803 45.67455102 -31.39453125 52.43359375 Z M-155.39453125 133.43359375 C-162.75507504 141.11416119 -163.54588809 148.01819675 -163.53497314 158.25006104 C-163.53794427 159.12609568 -163.54091539 160.00213033 -163.54397655 160.90471148 C-163.55263342 163.83394501 -163.55416924 166.76313752 -163.55566406 169.69238281 C-163.56029434 171.79524319 -163.56531928 173.89810273 -163.57070923 176.0009613 C-163.58381436 181.70977275 -163.59027442 187.41857245 -163.59471989 193.12739658 C-163.59765344 196.69580048 -163.60175877 200.26420117 -163.60622406 203.83260345 C-163.61989354 215.00254401 -163.62956309 226.17247725 -163.63342595 237.34242558 C-163.63790657 250.22698714 -163.65545701 263.11144261 -163.68442655 275.99597192 C-163.70605521 285.96219863 -163.71613085 295.92839552 -163.71746707 305.89464545 C-163.71851417 311.84399227 -163.72440202 317.79323928 -163.74228668 323.74256134 C-163.75878793 329.34041616 -163.76091281 334.93809637 -163.75214767 340.53596687 C-163.75137843 342.58617432 -163.75570516 344.63639125 -163.76560593 346.68657494 C-164.01984437 362.51185867 -164.01984437 362.51185867 -158.83203125 377.24609375 C-138.23863629 395.72734564 -97.92223366 384.43359375 -78.39453125 384.43359375 C-78.39453125 300.28359375 -78.39453125 216.13359375 -78.39453125 129.43359375 C-118.25120917 125.68661387 -118.25120917 125.68661387 -155.39453125 133.43359375 Z M-35.39453125 129.43359375 C-35.39453125 213.58359375 -35.39453125 297.73359375 -35.39453125 384.43359375 C6.84546875 384.43359375 49.08546875 384.43359375 92.60546875 384.43359375 C92.60546875 300.28359375 92.60546875 216.13359375 92.60546875 129.43359375 C50.36546875 129.43359375 8.12546875 129.43359375 -35.39453125 129.43359375 Z M135.60546875 129.43359375 C135.60546875 213.58359375 135.60546875 297.73359375 135.60546875 384.43359375 C175.98073216 387.75930305 175.98073216 387.75930305 213.60546875 379.43359375 C215.88958733 377.3073224 215.88958733 377.3073224 217.16796875 374.93359375 C217.85052734 373.8353125 217.85052734 373.8353125 218.546875 372.71484375 C220.9394345 367.55892218 220.7517861 362.23962456 220.74591064 356.65472412 C220.74888177 355.77067123 220.75185289 354.88661833 220.75491405 353.97577596 C220.76358559 351.01346343 220.76510799 348.0511914 220.76660156 345.08886719 C220.77123081 342.96482762 220.77625562 340.84078887 220.78164673 338.7167511 C220.79476209 332.94596608 220.80121397 327.17519269 220.80565739 321.4043951 C220.8085894 317.79831473 220.81269445 314.19223753 220.81716156 310.58615875 C220.83083399 299.3014206 220.84050199 288.01668971 220.84436345 276.73194385 C220.84884422 263.70926149 220.86639411 250.68668409 220.89536405 237.66403365 C220.9169851 227.59508351 220.92706796 217.5261629 220.92840457 207.4571898 C220.92945225 201.44470322 220.9353525 195.43231533 220.95322418 189.41985321 C220.96971216 183.76291943 220.97185674 178.10615847 220.96308517 172.44920921 C220.96231521 170.37600682 220.9666522 168.30279511 220.97654343 166.22961617 C220.98928054 163.39300536 220.98337644 160.55700504 220.97296143 157.72039795 C220.98101783 156.90568834 220.98907423 156.09097873 220.99737477 155.25158095 C220.9365555 148.1383014 219.35546142 142.08358266 215.41796875 136.12109375 C195.75522978 117.33225429 152.53475318 129.43359375 135.60546875 129.43359375 Z "
        fill={fill}
        transform="translate(227.39453125,20.56640625)"
      />
    </svg>
  );
}
