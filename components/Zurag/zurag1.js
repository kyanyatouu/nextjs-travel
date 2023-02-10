import Image from 'next/image';
const ing = [
  'https://s3-alpha-sig.figma.com/img/9edf/2219/ccfc207a456ee5529258039241c34f5c?Expires=1676851200&Signature=m5~WehrPN9v8dBOsYZfnIB1dIS7TXp-nx7Je467pOT2r5-vaAjKxsLlfMUkDtRvBBOF1gygzm7fC16sHPuZU-SE0S6KvdbePcxeVaXp4ijn6P4R0t7XuclFUE35yBV2OHprFLhu5pE28P3vja6NlxczKPiW5XbQInQIu5BCBCaZ~48dzubCLKc6Ksgg04aIauq~6zNEky0wMv6T7bTnDxU80CGOqZ-1gwvbVOb0BiUK-CSFkIxBBtDw2QcBrcoovcz5dr8tl3BjU~hAj8ssbuWR73MYN3qeSEDLw00INiraXeqmuFgXKv6uA-z26RnleUF~0C4ni4gqwMWvpdL-rOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/280c/938f/164af17152bf566d19170621c9501ae7?Expires=1676851200&Signature=LsRYRAZS-tIFDMgSc3Lx67y5QptEewZUndlOjFs6xOuy~dpTkWYjJ~9yuhWUEn3eOc-w5JwB-dk7glxqA1wOY4qoLKn1Ejv7ciZgKrn3jyWEXEIv6nw6sGo3jQf-wCU-v4yYuUmqac3oyRVVj~qLjaaJquch0T0scD1Zt9IdkUuJ2thrNiaTtrVykk8rI0IxciNfcWgdczROQiiTuZrAtaIfbbjtDQNyy1awb9K0yRUOdWw-HNlSQGntmT6Ph2GRfmBpK337nrIT19QeYDJ0~x3esidNUwOIN0JdY2PYHHOyLfrWJTCE0JgR92So3JiLiV9qQGQ9R1A8jWMVofHUDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/e64d/b7d3/625fc0b788bdabf8b93b5e7504521abb?Expires=1676851200&Signature=adT1bWcoLN6dF2SEPz4Yt0rwqt0ek7A4LCBw3dOdHkGa1DpaU~tORdH-KM06KhXDtMBeYL7m02Ppes4R1pvfFz1pz6ojTFuUwFJsLgwOrLJ3O44gkSQnEhi~0NqjFqUVr1xn6ybVaxWDTwYFfNSUAN2RqfzecdYLqu2SJn33DLemJXlbg0pZk9EMu0nuCMvz2PQnHDOHGWp~ahMeYbrNKXFmZ7QvYteen-RWWJeAZ2IigVtQ9AYLet2LQPtiK1GU94Web0YzmD5aqV~9AsHGz8Nm~4Jnj2WrCVaDG5KlwUmVTyHW8h0l3f2EK4dhyYER9uZtFe3qdBTrX262iF1vLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

function Zurag1(props) {
  return (
    <Image
      className={`flex mt-[101px] rounded-[95px] h-[448px] ml-[50px] ${props.className}`}
      src={ing[props.index]}
      width={274}
      height={448}
    />
  );
}

export default Zurag1;
