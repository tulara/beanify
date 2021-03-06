import * as Color from "color"

const BeanieSVG = ({
  className,
  strokeBody,
  strokeBrim,
  strokePompom,
  pompom,
}) => {
  const bodyFill = Color(strokeBody).lighten(0.2)
  const brimFill = Color(strokeBrim).lighten(0.2)
  const pomFill = Color(strokePompom).lighten(0.2)

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="123.46142857142856 51.06 358 474.37952380952385"
      width="350"
      height="466.38"
      fill="white"
      className={className}
      strokeWidth="8"
    >
      <g>
        <g stroke={strokeBody} fill={bodyFill}>
          <path
            d="M142.65 405.35L144.78 360.77L146.91 316.2L159.85 275.12L178.41 231.33L207.51 196.97L236.46 165.59L275.67 149.59L316.9 148.58L360.73 150.67L401.26 164.52L429.97 195.68L447.16 238.19L458.88 280.45L459.49 325.16L457.36 369.73L455.23 414.31"
            id="k1owoX5rn"
          ></path>
        </g>
        <g stroke={strokeBrim} fill={brimFill}>
          <path
            d="M130.24 421.44L130.24 463.11L127.46 507.56L166.35 521.44L208.01 515.89L249.68 515.89L291.35 515.89L335.79 515.89L377.46 515.89L419.13 515.89L460.79 515.89L471.9 477L477.46 435.33L446.9 407.56L405.24 402L358.01 402L316.35 396.44L274.68 396.44L233.01 396.44L188.57 396.44L146.9 404.78"
            id="ajJ5J6clD"
          ></path>
          <path d="M127.46 421.44L149.68 399.22" id="cuA0NFSRF"></path>
          <g strokeWidth="4">
            <path
              d="M149.68 407.56L142.27 458.94L138.57 510.33"
              id="h2hEdLIMks"
            ></path>
            <path
              d="M169.13 404.78L152.46 455.74L149.68 510.33"
              id="a15Uuw1JO"
            ></path>
            <path
              d="M183.01 399.22L173.76 458.23L169.13 521.44"
              id="a135J0YgHo"
            ></path>
            <path
              d="M199.68 396.44L189.68 458.94L183.01 521.44"
              id="f1KSQaddUJ"
            ></path>
            <path
              d="M208.01 396.44L196.9 451.43L196.9 510.33"
              id="cCgA0peIg"
            ></path>
            <path
              d="M219.13 399.22L208.01 454.2L208.01 513.11"
              id="a2iXs4gGiT"
            ></path>
            <path
              d="M224.68 396.44L224.68 454.78L227.46 513.11"
              id="auEgqERcH"
            ></path>
            <path
              d="M236.9 395.06L236.9 453.39L239.68 511.72"
              id="aqKcw8jVa"
            ></path>
            <path
              d="M251.9 399.22L251.9 457.56L254.68 515.89"
              id="a2f3zfT4GK"
            ></path>
            <path
              d="M271.9 393.67L269.13 452L269.13 510.33"
              id="f1Z74BVSK"
            ></path>
            <path
              d="M281.9 399.08L282.16 454.78L289.64 513.25"
              id="aVOCSEDk"
            ></path>
            <path
              d="M303.85 395.06L301.07 453.39L301.07 511.72"
              id="a32DZja7kH"
            ></path>
            <path
              d="M316.35 396.44L316.35 453.39L310.79 510.33"
              id="aVtAw3lek"
            ></path>
            <path
              d="M328.57 400.61L328.57 457.56L323.01 514.5"
              id="c5oWCSPM2"
            ></path>
            <path
              d="M348.57 404.78L348.57 461.72L343.01 518.67"
              id="akcZpGEW0"
            ></path>
            <path
              d="M366.35 400.61L366.35 457.56L360.79 514.5"
              id="dQftwoLA4"
            ></path>
            <path
              d="M384.13 399.22L384.13 456.17L378.57 513.11"
              id="c1XNd6cBwz"
            ></path>
            <path
              d="M395.24 402L395.24 458.94L389.68 515.89"
              id="a1oQwQ8TDr"
            ></path>
            <path
              d="M410.51 398.44L407.74 456.78L407.74 515.11"
              id="p1vV9lZST"
            ></path>
            <path
              d="M428.57 407.56L428.57 464.5L423.01 521.44"
              id="c1WW5ZUsA"
            ></path>
            <path
              d="M444.13 413.11L444.13 461.72L441.35 510.33"
              id="i1JPVidMn"
            ></path>
            <path
              d="M460.79 427L455.24 468.67L444.13 507.56"
              id="aOvdBTsrl"
            ></path>
          </g>
        </g>
        {pompom && (
          <g stroke={strokePompom} fill={pomFill}>
            <path
              d="M304.57 55.06L309.51 74.81L329.26 69.88L342.84 84.69L358.89 71.11L372.47 56.3L371.23 77.28L393.46 84.69L388.52 104.44L404.57 116.79L389.75 130.37L409.51 142.72L388.52 153.83L388.52 174.81L368.77 178.52L352.72 198.27L332.96 194.57L319.38 210.62L300.86 201.98L281.11 197.04L260.12 199.51L266.3 179.75L239.14 167.41L231.73 147.65L245.31 132.84L230.49 118.02L247.78 104.44L255.19 83.46L274.94 79.75L294.69 67.41"
              id="f2ourGqK2F"
            ></path>
          </g>
        )}
      </g>
    </svg>
  )
}

export default BeanieSVG
