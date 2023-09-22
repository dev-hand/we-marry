import React, { useEffect } from 'react'
import { KAKAO_JS_KEY, KAKAO_REST_API_KEY } from 'global/constant'

export const Map: React.FC<{ address: string }> = ({ address }) => {
  useEffect(() => {
    fetch(`https://dapi.kakao.com/v2/local/search/address?query=${address}`, {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const lat = res.documents[0].address.y
        const lng = res.documents[0].address.x
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`
        document.head.appendChild(kakaoMapScript)
        const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
            const container = document.getElementById('map')
            const position = new window.kakao.maps.LatLng(lat, lng)
            const options = {
              center: position,
              level: 3,
            }
            const map = new window.kakao.maps.Map(container, options)
            const marker = new window.kakao.maps.Marker({
              position,
            })
            marker.setMap(map)
          })
        }
        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div id='map' style={{ width: '100%', height: '300px' }} />
}
