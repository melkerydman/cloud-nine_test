const icons = {
  address:
    "M2.78418 11.8916C2.78418 12.1162 2.86279 12.3071 3.03125 12.4644L12.0156 21.0107C12.1616 21.1567 12.3525 21.2354 12.5659 21.2354C13.0039 21.2354 13.3408 20.9097 13.3408 20.4604C13.3408 20.2471 13.251 20.0562 13.1274 19.9214L4.68213 11.8916L13.1274 3.86182C13.251 3.71582 13.3408 3.5249 13.3408 3.31152C13.3408 2.87354 13.0039 2.53662 12.5659 2.53662C12.3525 2.53662 12.1616 2.61523 12.0156 2.76123L3.03125 11.3188C2.86279 11.4761 2.78418 11.667 2.78418 11.8916Z",
  chevron_up:
    "M8.00781 4.64844C7.84375 4.64844 7.69531 4.71875 7.57812 4.84375L1.65625 11.0781C1.55469 11.1797 1.49219 11.3047 1.49219 11.4609C1.49219 11.7656 1.72656 12 2.03125 12C2.17188 12 2.32031 11.9453 2.42187 11.8438L8 5.96875L13.5937 11.8438C13.6875 11.9453 13.8281 12 13.9766 12C14.2812 12 14.5156 11.7656 14.5156 11.4609C14.5156 11.3047 14.4531 11.1797 14.3516 11.0703L8.42969 4.83594C8.30469 4.71875 8.17187 4.64844 8.00781 4.64844Z",
  chevron_down:
    "M7.99219 11.3516C8.15625 11.3516 8.30469 11.2812 8.42188 11.1562L14.3438 4.92188C14.4453 4.82031 14.5078 4.69531 14.5078 4.53906C14.5078 4.23438 14.2734 4 13.9688 4C13.8281 4 13.6797 4.05469 13.5781 4.15625L8 10.0312L2.40625 4.15625C2.3125 4.05469 2.17188 4 2.02344 4C1.71875 4 1.48438 4.23438 1.48438 4.53906C1.48437 4.69531 1.54687 4.82031 1.64844 4.92969L7.57031 11.1641C7.69531 11.2812 7.82812 11.3516 7.99219 11.3516Z",
  chevron_right:
    "M11.3516 8.00781C11.3516 7.84375 11.2812 7.69531 11.1562 7.57812L4.92187 1.65625C4.82031 1.55469 4.69531 1.49219 4.53906 1.49219C4.23437 1.49219 4 1.72656 4 2.03125C4 2.17188 4.05469 2.32031 4.15625 2.42187L10.0312 8L4.15625 13.5937C4.05469 13.6875 4 13.8281 4 13.9766C4 14.2812 4.23438 14.5156 4.53906 14.5156C4.69531 14.5156 4.82031 14.4531 4.92969 14.3516L11.1641 8.42969C11.2812 8.30469 11.3516 8.17187 11.3516 8.00781Z",
  chevron_left:
    "M4.64844 7.99219C4.64844 8.15625 4.71875 8.30469 4.84375 8.42187L11.0781 14.3437C11.1797 14.4453 11.3047 14.5078 11.4609 14.5078C11.7656 14.5078 12 14.2734 12 13.9688C12 13.8281 11.9453 13.6797 11.8437 13.5781L5.96875 8L11.8437 2.40625C11.9453 2.3125 12 2.17188 12 2.02344C12 1.71875 11.7656 1.48437 11.4609 1.48437C11.3047 1.48437 11.1797 1.54687 11.0703 1.64844L4.83594 7.57031C4.71875 7.69531 4.64844 7.82812 4.64844 7.99219Z",
  heart:
    "M2.06152 8.71338C2.06152 13.3965 6.14941 17.9897 12.3149 21.9878C12.5171 22.1113 12.7979 22.2349 13 22.2349C13.2021 22.2349 13.4829 22.1113 13.6963 21.9878C19.8618 17.9897 23.9497 13.3965 23.9497 8.71338C23.9497 4.87256 21.2993 2.13232 17.7617 2.13232C15.729 2.13232 13.9658 3.17676 13 4.79395C12.0454 3.18799 10.271 2.13232 8.23828 2.13232C4.70068 2.13232 2.06152 4.87256 2.06152 8.71338ZM3.44287 8.71338C3.44287 5.625 5.47559 3.5249 8.22705 3.5249C10.3159 3.5249 11.6074 4.81641 12.3823 6.10791C12.6182 6.47852 12.7754 6.59082 13 6.59082C13.2246 6.59082 13.3706 6.46729 13.6289 6.10791C14.4263 4.82764 15.6953 3.5249 17.7729 3.5249C20.5244 3.5249 22.5571 5.625 22.5571 8.71338C22.5571 12.9248 18.166 17.3721 13.2021 20.6851C13.1123 20.7412 13.0449 20.7861 13 20.7861C12.9551 20.7861 12.8989 20.7412 12.8091 20.6851C7.84521 17.3721 3.44287 12.9248 3.44287 8.71338Z",
  hours:
    "M3.99561 8.80029H8.17773C8.25098 8.80029 8.31201 8.77588 8.36084 8.72705C8.41455 8.67334 8.44141 8.6123 8.44141 8.54395V3.146C8.44141 3.07275 8.41455 3.01416 8.36084 2.97021C8.31201 2.92139 8.25098 2.89697 8.17773 2.89697C8.11426 2.89697 8.05566 2.92139 8.00195 2.97021C7.95312 3.01416 7.92871 3.07275 7.92871 3.146V8.29492H3.99561C3.92236 8.29492 3.86133 8.31934 3.8125 8.36816C3.76855 8.41699 3.74658 8.47559 3.74658 8.54395C3.74658 8.6123 3.76855 8.67334 3.8125 8.72705C3.86133 8.77588 3.92236 8.80029 3.99561 8.80029ZM8.17773 15.3555C9.16895 15.3555 10.0967 15.1675 10.9609 14.7915C11.8252 14.4204 12.5869 13.9053 13.2461 13.2461C13.9053 12.5869 14.4229 11.8252 14.7988 10.9609C15.1748 10.0918 15.3628 9.16406 15.3628 8.17773C15.3628 7.19141 15.1748 6.26611 14.7988 5.40186C14.4229 4.53271 13.9053 3.76855 13.2461 3.10938C12.5869 2.4502 11.8228 1.93506 10.9536 1.56396C10.0894 1.18799 9.16406 1 8.17773 1C7.19141 1 6.26367 1.18799 5.39453 1.56396C4.53027 1.93506 3.76855 2.4502 3.10938 3.10938C2.4502 3.76855 1.93262 4.53271 1.55664 5.40186C1.18555 6.26611 1 7.19141 1 8.17773C1 9.16406 1.18555 10.0918 1.55664 10.9609C1.93262 11.8252 2.4502 12.5869 3.10938 13.2461C3.76855 13.9053 4.53027 14.4204 5.39453 14.7915C6.26367 15.1675 7.19141 15.3555 8.17773 15.3555ZM8.17773 14.7988C7.26465 14.7988 6.40771 14.6279 5.60693 14.2861C4.80615 13.9443 4.10059 13.4707 3.49023 12.8652C2.88477 12.2549 2.41113 11.5493 2.06934 10.7485C1.72754 9.94775 1.55664 9.09082 1.55664 8.17773C1.55664 7.26465 1.72754 6.40771 2.06934 5.60693C2.41113 4.80615 2.88477 4.10059 3.49023 3.49023C4.10059 2.87988 4.80615 2.40381 5.60693 2.06201C6.40771 1.72021 7.26465 1.54932 8.17773 1.54932C9.0957 1.54932 9.95264 1.72021 10.7485 2.06201C11.5493 2.40381 12.2549 2.87988 12.8652 3.49023C13.4756 4.10059 13.9517 4.80615 14.2935 5.60693C14.6353 6.40771 14.8062 7.26465 14.8062 8.17773C14.8062 9.09082 14.6353 9.94775 14.2935 10.7485C13.9517 11.5493 13.4756 12.2549 12.8652 12.8652C12.2598 13.4707 11.5566 13.9443 10.7559 14.2861C9.95508 14.6279 9.0957 14.7988 8.17773 14.7988Z",
  phone:
    "M11.2829 14.645C11.8005 14.645 12.2766 14.562 12.7111 14.396C13.1506 14.23 13.5558 13.9566 13.9269 13.5757C13.9367 13.5611 13.9465 13.5464 13.9562 13.5318C13.9709 13.522 13.9855 13.5098 14.0002 13.4951C14.2199 13.2754 14.381 13.0484 14.4836 12.814C14.591 12.5796 14.6447 12.3526 14.6447 12.1328C14.6447 11.9326 14.591 11.7398 14.4836 11.5542C14.3762 11.3687 14.215 11.2027 14.0002 11.0562L11.8908 9.62063C11.6271 9.43997 11.3391 9.34719 11.0266 9.34231C10.7141 9.33254 10.3942 9.48879 10.0671 9.81106L9.56903 10.2945C9.49091 10.3726 9.40057 10.4214 9.29803 10.4409C9.1955 10.4605 9.08319 10.4361 8.96112 10.3677C8.8537 10.314 8.69745 10.2139 8.49237 10.0674C8.29218 9.91604 8.06757 9.73538 7.81854 9.52542C7.5744 9.31545 7.33026 9.0884 7.08612 8.84426C6.8078 8.57083 6.57343 8.33157 6.383 8.12649C6.19745 7.91653 6.0412 7.72122 5.91425 7.54055C5.78729 7.35989 5.6701 7.1719 5.56268 6.97659C5.50409 6.85452 5.48456 6.74221 5.50409 6.63967C5.52362 6.53713 5.57245 6.4468 5.65057 6.36868L6.12665 5.87795C6.4538 5.54104 6.61249 5.21877 6.60272 4.91116C6.59296 4.59866 6.50018 4.31057 6.3244 4.0469L4.88153 1.93752C4.73016 1.72268 4.56415 1.56399 4.38348 1.46145C4.20282 1.35891 4.00995 1.3052 3.80487 1.30032C3.35077 1.29055 2.89667 1.5054 2.44257 1.94485C2.42792 1.9595 2.41327 1.9717 2.39862 1.98147C2.38885 1.99124 2.37909 2.001 2.36932 2.01077C1.99335 2.3721 1.71991 2.77004 1.54901 3.20461C1.383 3.63918 1.29999 4.11038 1.29999 4.61819C1.29999 5.28225 1.44403 5.98049 1.73212 6.71292C2.02509 7.44534 2.4328 8.18508 2.95526 8.93215C3.4826 9.67922 4.10516 10.4092 4.82294 11.1221C5.53094 11.8252 6.25604 12.4405 6.99823 12.9678C7.74042 13.4951 8.47284 13.9053 9.1955 14.1983C9.92303 14.4961 10.6188 14.645 11.2829 14.645ZM11.2902 14.0738C10.6701 14.0786 10.0134 13.9395 9.32001 13.6563C8.63153 13.3731 7.93817 12.98 7.23993 12.4771C6.54169 11.9741 5.86542 11.398 5.21112 10.7486C4.55682 10.0894 3.97577 9.40823 3.46796 8.7051C2.96503 7.9971 2.57196 7.29641 2.28876 6.60305C2.00555 5.90481 1.86395 5.24319 1.86395 4.61819C1.86395 4.20315 1.93719 3.81008 2.08368 3.43899C2.23016 3.0679 2.45721 2.73342 2.76483 2.43557C2.7746 2.42092 2.7868 2.40872 2.80145 2.39895C2.8161 2.38918 2.82831 2.37698 2.83807 2.36233C3.00409 2.2012 3.16766 2.08157 3.3288 2.00344C3.48993 1.92043 3.63885 1.87893 3.77557 1.87893C4.0246 1.87893 4.23944 2.01077 4.4201 2.27444L5.841 4.36917C5.94354 4.53518 5.99725 4.7134 6.00214 4.90383C6.00702 5.08938 5.90692 5.27981 5.70184 5.47512L5.16718 6.00979C4.99139 6.18069 4.89374 6.37844 4.87421 6.60305C4.85956 6.82278 4.90594 7.02786 5.01337 7.21829C5.1452 7.43801 5.3576 7.7261 5.65057 8.08254C5.94843 8.43899 6.29755 8.81985 6.69794 9.22512C6.96649 9.49856 7.22528 9.74758 7.4743 9.97219C7.72821 10.1968 7.96259 10.3897 8.17743 10.5508C8.39227 10.7119 8.57294 10.8365 8.71942 10.9243C8.90985 11.0318 9.11493 11.0781 9.33466 11.0635C9.55927 11.0489 9.75702 10.9536 9.92792 10.7779L10.4626 10.2359C10.6628 10.0357 10.8557 9.93557 11.0412 9.93557C11.2316 9.93557 11.4074 9.99172 11.5685 10.104L13.6706 11.5249C13.7975 11.6128 13.8928 11.7105 13.9562 11.8179C14.0246 11.9204 14.0588 12.0352 14.0588 12.1621C14.0588 12.46 13.8952 12.7774 13.5681 13.1143C13.5583 13.124 13.5485 13.1338 13.5388 13.1436C13.529 13.1533 13.5192 13.1631 13.5095 13.1729C13.2018 13.4854 12.86 13.7124 12.4841 13.854C12.113 14.0005 11.715 14.0738 11.2902 14.0738Z",
  settings:
    "M4.41943 21.3838C4.80127 21.3838 5.10449 21.0693 5.10449 20.71V17.2734C6.16016 16.9702 6.93506 15.9932 6.93506 14.8477C6.93506 13.7021 6.16016 12.7251 5.10449 12.4219V2.69629C5.10449 2.31445 4.80127 2 4.41943 2C4.02637 2 3.72314 2.31445 3.72314 2.69629V12.4106C2.66748 12.7139 1.88135 13.6909 1.88135 14.8477C1.88135 15.9932 2.66748 16.9702 3.72314 17.2734V20.71C3.72314 21.0693 4.02637 21.3838 4.41943 21.3838ZM12 21.3838C12.3818 21.3838 12.6963 21.0693 12.6963 20.6875V10.5576C13.7407 10.2544 14.5156 9.27734 14.5156 8.13184C14.5156 6.98633 13.7407 6.00928 12.6963 5.70605V2.67383C12.6963 2.31445 12.3818 2 12 2C11.6069 2 11.3037 2.31445 11.3037 2.67383V5.69482C10.248 5.99805 9.46191 6.9751 9.46191 8.13184C9.46191 9.27734 10.248 10.2544 11.3037 10.5576V20.6875C11.3037 21.0693 11.6069 21.3838 12 21.3838ZM17.0649 14.8477C17.0649 15.9932 17.8398 16.959 18.8843 17.2734V20.71C18.8843 21.0693 19.1875 21.3838 19.5806 21.3838C19.9624 21.3838 20.2769 21.0693 20.2769 20.71V17.2734C21.3325 16.9814 22.1187 16.0044 22.1187 14.8477C22.1187 13.6909 21.3325 12.7139 20.2769 12.4106V2.69629C20.2769 2.31445 19.9624 2 19.5806 2C19.1875 2 18.8843 2.31445 18.8843 2.69629V12.4219C17.8398 12.7251 17.0649 13.7021 17.0649 14.8477ZM10.6074 8.13184C10.6074 7.35693 11.2251 6.75049 12 6.75049C12.7749 6.75049 13.3813 7.35693 13.3813 8.13184C13.3813 8.90674 12.7749 9.51318 12 9.51318C11.2251 9.51318 10.6074 8.90674 10.6074 8.13184ZM3.02686 14.8477C3.02686 14.0728 3.64453 13.4663 4.41943 13.4663C5.19434 13.4663 5.78955 14.0728 5.78955 14.8477C5.78955 15.6226 5.19434 16.229 4.41943 16.229C3.64453 16.229 3.02686 15.6226 3.02686 14.8477ZM18.2104 14.8477C18.2104 14.0728 18.8281 13.4663 19.603 13.4663C20.3779 13.4663 20.9844 14.0728 20.9844 14.8477C20.9844 15.6226 20.3779 16.229 19.603 16.229C18.8281 16.229 18.2104 15.6226 18.2104 14.8477Z",
  star_empty:
    "M6 1.59688L7.18367 4.16307L7.24228 4.29014L7.38125 4.30662L10.1876 4.63936L8.1128 6.55809L8.01006 6.65311L8.03733 6.79036L8.58809 9.5622L6.12211 8.18185L6 8.1135L5.87789 8.18185L3.41191 9.5622L3.96267 6.79036L3.98994 6.65311L3.8872 6.55809L1.81238 4.63936L4.61875 4.30662L4.75772 4.29014L4.81633 4.16307L6 1.59688Z",

  star_filled:
    "M6 1L7.41068 4.05836L10.7553 4.45492L8.28254 6.74164L8.93893 10.0451L6 8.4L3.06107 10.0451L3.71746 6.74164L1.24472 4.45492L4.58932 4.05836L6 1Z",
  website:
    "M8.17773 15.231C8.63184 15.231 9.06885 15.0649 9.48877 14.7329C9.91357 14.4009 10.292 13.9272 10.624 13.312C10.9561 12.6968 11.2173 11.957 11.4077 11.0928C11.603 10.2285 11.7007 9.26172 11.7007 8.19238C11.7007 7.12305 11.603 6.15869 11.4077 5.29932C11.2173 4.43506 10.9561 3.69531 10.624 3.08008C10.292 2.45996 9.91602 1.98389 9.49609 1.65186C9.07617 1.31982 8.63672 1.15381 8.17773 1.15381C7.72363 1.15381 7.28662 1.31982 6.8667 1.65186C6.44678 1.98389 6.0708 2.45996 5.73877 3.08008C5.40674 3.69531 5.14307 4.43506 4.94775 5.29932C4.75244 6.15869 4.65479 7.12305 4.65479 8.19238C4.65479 9.26172 4.75244 10.2285 4.94775 11.0928C5.14307 11.957 5.40674 12.6968 5.73877 13.312C6.0708 13.9272 6.44678 14.4009 6.8667 14.7329C7.28662 15.0649 7.72363 15.231 8.17773 15.231ZM8.17773 1.57861C8.58301 1.57861 8.96387 1.74951 9.32031 2.09131C9.68164 2.42822 10.0015 2.89941 10.2798 3.50488C10.563 4.10547 10.7852 4.80615 10.9463 5.60693C11.1074 6.40771 11.188 7.26953 11.188 8.19238C11.188 9.08105 11.1074 9.92334 10.9463 10.7192C10.7852 11.5103 10.563 12.2134 10.2798 12.8286C10.0015 13.4438 9.68164 13.9272 9.32031 14.2788C8.96387 14.6304 8.58301 14.8062 8.17773 14.8062C7.77734 14.8062 7.39648 14.6304 7.03516 14.2788C6.67383 13.9272 6.354 13.4438 6.07568 12.8286C5.79736 12.2134 5.5752 11.5103 5.40918 10.7192C5.24805 9.92334 5.16748 9.08105 5.16748 8.19238C5.16748 7.26953 5.24805 6.40771 5.40918 5.60693C5.5752 4.80615 5.79736 4.10547 6.07568 3.50488C6.354 2.89941 6.67383 2.42822 7.03516 2.09131C7.39648 1.74951 7.77734 1.57861 8.17773 1.57861ZM7.93604 1.271V15.0845H8.42676V1.271H7.93604ZM8.17773 11.3418C7.4502 11.3418 6.76416 11.3979 6.11963 11.5103C5.47998 11.6226 4.90137 11.7812 4.38379 11.9863C3.87109 12.1865 3.44385 12.4209 3.10205 12.6895L3.47559 13.0044C3.8125 12.7554 4.21533 12.5454 4.68408 12.3745C5.15771 12.1987 5.68506 12.0669 6.26611 11.979C6.85205 11.8862 7.48926 11.8398 8.17773 11.8398C8.87109 11.8398 9.5083 11.8862 10.0894 11.979C10.6753 12.0669 11.2026 12.1987 11.6714 12.3745C12.1401 12.5454 12.5454 12.7554 12.8872 13.0044L13.2607 12.6895C12.9189 12.4209 12.4893 12.1865 11.9717 11.9863C11.4541 11.7812 10.873 11.6226 10.2285 11.5103C9.58887 11.3979 8.90527 11.3418 8.17773 11.3418ZM15.0479 7.92871H1.31494V8.42676H15.0479V7.92871ZM8.17773 5.04297C8.90527 5.04297 9.58887 4.98926 10.2285 4.88184C10.873 4.76953 11.4541 4.61328 11.9717 4.41309C12.4893 4.20801 12.9189 3.97119 13.2607 3.70264L12.8872 3.3877C12.5454 3.63672 12.1401 3.84912 11.6714 4.0249C11.2026 4.1958 10.6753 4.32764 10.0894 4.42041C9.5083 4.5083 8.87109 4.55225 8.17773 4.55225C7.48926 4.55225 6.85205 4.5083 6.26611 4.42041C5.68506 4.32764 5.15771 4.1958 4.68408 4.0249C4.21533 3.84912 3.8125 3.63672 3.47559 3.3877L3.10205 3.70264C3.44385 3.97119 3.87109 4.20801 4.38379 4.41309C4.90137 4.61328 5.47998 4.76953 6.11963 4.88184C6.76416 4.98926 7.4502 5.04297 8.17773 5.04297ZM8.17773 15.3555C9.16895 15.3555 10.0967 15.1675 10.9609 14.7915C11.8252 14.4204 12.5869 13.9053 13.2461 13.2461C13.9053 12.5869 14.4229 11.8252 14.7988 10.9609C15.1748 10.0918 15.3628 9.16406 15.3628 8.17773C15.3628 7.19141 15.1748 6.26611 14.7988 5.40186C14.4229 4.53271 13.9053 3.76855 13.2461 3.10938C12.5869 2.4502 11.8228 1.93506 10.9536 1.56396C10.0894 1.18799 9.16406 1 8.17773 1C7.19141 1 6.26367 1.18799 5.39453 1.56396C4.53027 1.93506 3.76855 2.4502 3.10938 3.10938C2.4502 3.76855 1.93262 4.53271 1.55664 5.40186C1.18555 6.26611 1 7.19141 1 8.17773C1 9.16406 1.18555 10.0918 1.55664 10.9609C1.93262 11.8252 2.4502 12.5869 3.10938 13.2461C3.76855 13.9053 4.53027 14.4204 5.39453 14.7915C6.26367 15.1675 7.19141 15.3555 8.17773 15.3555ZM8.17773 14.8574C7.25977 14.8574 6.39795 14.6841 5.59229 14.3374C4.78662 13.9907 4.07617 13.5098 3.46094 12.8945C2.8457 12.2793 2.36475 11.5688 2.01807 10.7632C1.67627 9.95752 1.50537 9.0957 1.50537 8.17773C1.50537 7.25977 1.67627 6.39795 2.01807 5.59229C2.36475 4.78662 2.84326 4.07617 3.45361 3.46094C4.06885 2.8457 4.7793 2.36475 5.58496 2.01807C6.39551 1.67139 7.25977 1.49805 8.17773 1.49805C9.0957 1.49805 9.95752 1.67139 10.7632 2.01807C11.5737 2.36475 12.2842 2.8457 12.8945 3.46094C13.5098 4.07617 13.9907 4.78662 14.3374 5.59229C14.6841 6.39795 14.8574 7.25977 14.8574 8.17773C14.8574 9.0957 14.6841 9.95752 14.3374 10.7632C13.9907 11.5688 13.5098 12.2793 12.8945 12.8945C12.2842 13.5098 11.5737 13.9907 10.7632 14.3374C9.95752 14.6841 9.0957 14.8574 8.17773 14.8574Z",
};
export default icons;
