import React from 'react'
import styled from 'styled-components'

const StyledLogotype = styled.svg`
  fill: ${(p) => p.theme.colors.header};
`

const StyledLogo = styled.svg`
  stroke: ${(p) => p.theme.colors.primary};
`

const Logotype = () => {
  return (
    <StyledLogotype viewBox="0 0 98 32">
      <path
        d="M47.157 24.291c-1.423 0-2.636-.259-3.64-.776a8.125 8.125 0 0 1-2.547-2.087l1.893-1.77c.598.727 1.253 1.277 1.965 1.649.728.372 1.553.558 2.475.558 1.083 0 1.9-.243 2.45-.728.55-.485.825-1.14.825-1.965 0-.663-.194-1.189-.582-1.577-.389-.388-1.076-.68-2.063-.873l-1.504-.267c-1.65-.308-2.887-.85-3.712-1.626-.825-.776-1.237-1.844-1.237-3.202 0-.744.137-1.416.412-2.014a4.29 4.29 0 0 1 1.19-1.529c.517-.42 1.14-.744 1.867-.97.728-.226 1.545-.34 2.45-.34 1.279 0 2.386.227 3.325.68a6.547 6.547 0 0 1 2.402 1.916l-1.917 1.699a4.985 4.985 0 0 0-1.602-1.359c-.63-.34-1.415-.51-2.353-.51-.97 0-1.722.195-2.256.583-.534.388-.8.954-.8 1.698 0 .712.218 1.245.654 1.601.437.34 1.116.599 2.038.777l1.505.315c1.698.324 2.935.873 3.711 1.65.793.776 1.19 1.844 1.19 3.202 0 .793-.138 1.513-.413 2.16a4.596 4.596 0 0 1-1.213 1.674c-.518.453-1.157.808-1.917 1.067-.76.243-1.625.364-2.596.364zM61.342 24.291c-.906 0-1.715-.154-2.426-.46a5.096 5.096 0 0 1-1.82-1.31c-.501-.583-.89-1.279-1.164-2.087-.26-.825-.389-1.74-.389-2.742 0-1.003.13-1.909.389-2.717.274-.825.663-1.52 1.164-2.087a4.97 4.97 0 0 1 1.82-1.334c.711-.307 1.52-.461 2.426-.461.922 0 1.73.162 2.426.485a4.77 4.77 0 0 1 1.771 1.359c.47.566.817 1.229 1.043 1.99.243.76.364 1.576.364 2.45v.994h-8.661v.413c0 .97.283 1.77.849 2.402.582.614 1.407.922 2.475.922.776 0 1.431-.17 1.965-.51.534-.34.987-.8 1.359-1.383l1.552 1.529c-.469.776-1.148 1.399-2.038 1.868-.89.453-1.925.68-3.105.68zm0-11.136c-.453 0-.874.081-1.262.243a2.925 2.925 0 0 0-.97.68 3.16 3.16 0 0 0-.607 1.042c-.145.405-.218.85-.218 1.335v.17h5.871v-.243c0-.97-.25-1.747-.752-2.33-.501-.598-1.189-.897-2.062-.897zM74.823 24.291c-.906 0-1.714-.154-2.426-.46a5.097 5.097 0 0 1-1.82-1.31c-.501-.583-.89-1.279-1.164-2.087-.26-.825-.388-1.74-.388-2.742 0-1.003.129-1.909.388-2.717.275-.825.663-1.52 1.164-2.087a4.97 4.97 0 0 1 1.82-1.334c.712-.307 1.52-.461 2.426-.461.922 0 1.73.162 2.426.485a4.77 4.77 0 0 1 1.771 1.359 5.57 5.57 0 0 1 1.044 1.99c.242.76.363 1.576.363 2.45v.994h-8.66v.413c0 .97.282 1.77.848 2.402.583.614 1.407.922 2.475.922.776 0 1.431-.17 1.965-.51.534-.34.987-.8 1.359-1.383l1.552 1.529c-.469.776-1.148 1.399-2.037 1.868-.89.453-1.925.68-3.106.68zm0-11.136c-.453 0-.873.081-1.262.243a2.925 2.925 0 0 0-.97.68c-.259.29-.461.638-.607 1.042-.145.405-.218.85-.218 1.335v.17h5.871v-.243c0-.97-.25-1.747-.752-2.33-.501-.598-1.189-.897-2.062-.897zM91.288 21.913h-.12c-.276.744-.729 1.327-1.36 1.747-.614.42-1.342.631-2.183.631-1.601 0-2.839-.574-3.712-1.722-.873-1.165-1.31-2.79-1.31-4.877 0-2.087.437-3.704 1.31-4.852.873-1.165 2.11-1.747 3.712-1.747.841 0 1.569.21 2.183.63.631.405 1.084.987 1.36 1.747h.12V6.047h2.645V24h-2.645v-2.087zm-2.862.098c.808 0 1.488-.194 2.037-.583.55-.404.825-.93.825-1.577v-4.318c0-.647-.275-1.165-.825-1.553-.55-.404-1.229-.607-2.037-.607-.922 0-1.658.3-2.208.898-.55.582-.825 1.359-.825 2.33v2.183c0 .97.275 1.755.825 2.353.55.582 1.286.874 2.207.874z"
        color="currentColor"
      />
      <circle
        cx="15.507"
        cy="15.507"
        r="12.922"
        stroke="#3CD1A5"
        strokeWidth="2.215"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M20.675 17.722c0 3.058-2.314 5.538-5.168 5.538-2.855 0-5.17-2.48-5.17-5.538 0-4.8 5.17-9.969 5.17-9.969s5.168 5.17 5.168 9.969zM15.507 7.753V23.26M15.507 19.383l4.522-4.522"
        stroke="#3CD1A5"
        strokeWidth="2.215"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </StyledLogotype>
  )
}

const Logo = () => {
  return (
    <StyledLogo>
      <circle
        cx="15.507"
        cy="15.507"
        r="12.922"
        strokeWidth="2.215"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M20.675 17.722c0 3.058-2.314 5.538-5.168 5.538-2.855 0-5.17-2.48-5.17-5.538 0-4.8 5.17-9.969 5.17-9.969s5.168 5.17 5.168 9.969zM15.507 7.753V23.26M15.507 19.383l4.522-4.522"
        strokeWidth="2.215"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </StyledLogo>
  )
}

export { Logo, Logotype }
