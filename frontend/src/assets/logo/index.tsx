import React, {FC} from 'react';

interface Props {
        color?: string;
        width?: number;
        height?: number;
}

const Logo: FC<Props> = ({color, width, height}) => {
    return (
        <svg width={width?width:32} height={height?height:14} viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.86667V2.8H6.05405V1.86667H0Z" fill={color?color:"#1F70C1"}/>
                <path d="M0 0.933333H6.05405V0H0V0.933333Z" fill={color?color:"#1F70C1"}/>
                <path d="M6.91892 1.86667V2.8H17.2374C17.1775 2.46971 17.0742 2.1562 16.9342 1.86667H6.91892Z" fill={color?color:"#1F70C1"}/>
                <path d="M16.2759 0.933333H6.91892V0H14.0818C14.9299 0 15.7014 0.354345 16.2759 0.933333Z" fill={color?color:"#1F70C1"}/>
                <path d="M18.1622 1.86667V2.8H24.0927L23.8456 1.86667H18.1622Z" fill={color?color:"#1F70C1"}/>
                <path d="M23.5985 0.933333H18.1622V0H23.3514L23.5985 0.933333Z" fill={color?color:"#1F70C1"}/>
                <path d="M26.3166 1.86667L26.0695 2.8H32V1.86667H26.3166Z" fill={color?color:"#1F70C1"}/>
                <path d="M32 0.933333H26.5637L26.8108 0H32V0.933333Z" fill={color?color:"#1F70C1"}/>
                <path d="M30.2703 3.73333H25.8224L25.5753 4.66667H30.2703V3.73333Z" fill={color?color:"#1F70C1"}/>
                <path d="M30.2703 5.6H27.6757H25.3282L25.0811 6.53333L24.834 5.6H22.4865H19.8919V6.53333H22.4865V5.6L22.7748 6.53333H25.0811H27.3874L27.6757 5.6V6.53333H30.2703V5.6Z" fill={color?color:"#1F70C1"}/>
                <path d="M30.2703 7.46667H27.6757V8.4H30.2703V7.46667Z" fill={color?color:"#1F70C1"}/>
                <path d="M30.2703 9.33333H27.6757V10.2667H30.2703V9.33333Z" fill={color?color:"#1F70C1"}/>
                <path d="M32 11.2H27.6757V12.1333H32V11.2Z" fill={color?color:"#1F70C1"}/>
                <path d="M32 13.0667H27.6757V14H32V13.0667Z" fill={color?color:"#1F70C1"}/>
                <path d="M0 14H6.05405V13.0667H0V14Z" fill={color?color:"#1F70C1"}/>
                <path d="M0 12.1333H6.05405V11.2H0V12.1333Z" fill={color?color:"#1F70C1"}/>
                <path d="M1.72973 10.2667H4.32432V9.33333H1.72973V10.2667Z" fill={color?color:"#1F70C1"}/>
                <path d="M1.72973 8.4H4.32432V7.46667H1.72973V8.4Z" fill={color?color:"#1F70C1"}/>
                <path d="M1.72973 6.53333H4.32432V5.6H1.72973V6.53333Z" fill={color?color:"#1F70C1"}/>
                <path d="M1.72973 4.66667H4.32432V3.73333H1.72973V4.66667Z" fill={color?color:"#1F70C1"}/>
                <path d="M8.64865 3.73333V4.66667H11.2432V3.73333H8.64865Z" fill={color?color:"#1F70C1"}/>
                <path d="M14.2703 3.73333V4.66667H17.1006C17.2011 4.37153 17.2655 4.05821 17.2881 3.73333H14.2703Z" fill={color?color:"#1F70C1"}/>
                <path d="M19.8919 3.73333V4.66667H24.5869L24.3398 3.73333H19.8919Z" fill={color?color:"#1F70C1"}/>
                <path d="M16.6203 5.6H8.64865V6.53333H15.5935C15.9952 6.30229 16.3444 5.98271 16.6203 5.6Z" fill={color?color:"#1F70C1"}/>
                <path d="M15.5935 7.46667H8.64865V8.4H16.6203C16.3444 8.01729 15.9952 7.69771 15.5935 7.46667Z" fill={color?color:"#1F70C1"}/>
                <path d="M17.1006 9.33333H13.8378V10.2667H17.2881C17.2655 9.94179 17.2011 9.62847 17.1006 9.33333Z" fill={color?color:"#1F70C1"}/>
                <path d="M19.8919 10.2667V9.33333H22.4865V10.2667H19.8919Z" fill={color?color:"#1F70C1"}/>
                <path d="M22.4865 11.2H18.1622V12.1333H22.4865V11.2Z" fill={color?color:"#1F70C1"}/>
                <path d="M24.5045 12.1333L24.2162 11.2H25.9459L25.6577 12.1333H24.5045Z" fill={color?color:"#1F70C1"}/>
                <path d="M22.4865 13.0667H18.1622V14H22.4865V13.0667Z" fill={color?color:"#1F70C1"}/>
                <path d="M14.0818 14C14.9299 14 15.7014 13.6457 16.2759 13.0667H6.91892V14H14.0818Z" fill={color?color:"#1F70C1"}/>
                <path d="M6.91892 12.1333H16.9342C17.0742 11.8438 17.1775 11.5303 17.2374 11.2H6.91892V12.1333Z" fill={color?color:"#1F70C1"}/>
                <path d="M8.64865 10.2667H11.2432V9.33333H8.64865V10.2667Z" fill={color?color:"#1F70C1"}/>
                <path d="M24.7928 13.0667H25.3694L25.0811 14L24.7928 13.0667Z" fill={color?color:"#1F70C1"}/>
                <path d="M26.2342 10.2667H23.9279L23.6396 9.33333H26.5225L26.2342 10.2667Z" fill={color?color:"#1F70C1"}/>
                <path d="M26.8108 8.4L27.0991 7.46667H23.0631L23.3514 8.4H26.8108Z" fill={color?color:"#1F70C1"}/>
                <path d="M22.4865 8.4H19.8919V7.46667H22.4865V8.4Z" fill={color?color:"#1F70C1"}/>
        </svg>
    );
};

export default Logo;