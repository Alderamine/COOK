import React from 'react'
import StarIcon from "../assets/TutorList/StarIcon.svg"

export default function TutorList() {
  return (
    <main className='px-[64px] w-full'>
      <div className='w-full bg-primary rounded-[16px]'>
        <div>
          <h1 className='font-rubik font-bold text-[42px] leading-[49.77px] trakcing-[-0.02em] text-[white]'>Find Your Perfect Chef</h1>
          <p className="font-outfit font-normal text-[24px] leading-[30.24px] text-[rgba(255,219,184,1)]">Find Your Perfect Chef</p>
        </div>
        <div>
          <div>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect y="0.5" width="16" height="16" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_171_2185" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_171_2185" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAAx//Bx//CyP/AKF/8+QAAAAR0Uk5TAHP/c78MbWcAAAfzSURBVHic7d3NeSM3DAZgR3mePeCQAlwCS8jJ9bgKlrAl4LAHrZJDSth6torEmng1muEPSAL4ZA9xFgevBiBkS6PR09OMGTNmzPjY8Xq5fEfmp8t/wbj8p8s1IgzwvAD+hgEu/wcq/+kdEEGA8A44gwCXC7YGpxsgogFfIQC6ARgCCDcApgsvqzgk4LQGxCMCaA3gIwKe1wDEPgyHB1zu4oCA0z0gHg/w5R7A7gA6PCDcA/wHARxw2cThAL9tAT+cAactIB4NQFsAHw0QtgDvQfB4gL+cAdv87pMIDdiNAe9BAAfsxoD3IHhEwDdXQNgDfCcRHLDP7zwI0IDEGPAdBI8J8HzDmFIAPhIgpACegwAOSOV3HQQPCnhxy58cA56TCA6gNICPAwhpgN8geFSA38Uc6fyOkwgNyIwBv0EAB1AOwBPgBAg5gNckggNy+d0GARqQHQNeg2ACKA/gYwBCHuAzCOCAfH6nQXB4QGEM+AwCOIBKAD4CIJQAHoNgAkr5XQYBGlAcAx6DAA6gMoAnwBwQygD7QQAHlPM7DAI0oDIG7AfBBFANwJ8dEGoA60EAB9Tymw+CwwOqY8B6EMABVAfw5wb8WQfYDoJweEA9v/EgQAMEY8B2EMABf0gAbAigwwOCBGA5COAASX7TQYAG7L7bk44fZgDRHLKcRHAAyQD8eQFBBrAbBHDAqwxg940fWX7DSYQGCMeA3SCAA0gK4M8KeK6nXsLqFk1BCrCaRHCANL/RIPgpz28wjakl+xKKdRAPoG2wSvre7EvEwexhLP01+rOTQvZrdLVDd+HTwY3pdbMvEcXZg0X6a0iyk1n2a1TaQbnw6WDXwqcj1Q7BL/01AKd+G6vTIHr3TT9uzYDJfysDoQAMPgHvpwDSgUtEyAZcxRlcgaUGwAosNSAk4G0fCD6Js4sztgcXADL/WxdCe/CtC+EAwgIYDwhYwHkCpO//mgV4Dk3ABEzABEzABDwC4BWb/wH+IIEDCAt4gD/Lv9QfZBlf8f+awf87xgMCMv/5Ed4jgr9LJrxEziZeHuKdUsIB+DHerIa/XY9rgvcPEQkFeP/EBNYEvz43C5j8tzu5EQZw+9gOVIPVJ5cYwOqj24DIv/4knxAAXgHQH16Lr5fVjPvbKZI/gO8AgBrcVQCxEe/z+2/E7eU05A3gDcC9CTYt4L4R95dcki9gWwH3Guwq4L0R9/l9N2LqmjbyBOxbwLkJEi3guhHT1z2THyBVAdcaJCvguRHT+f02Yu7CUvICpFvAsQkyLeC2EfNfPiAfQK4CbjXIVsBrI+bz+2zE0tXd5AHIt4BTExRawKcJSvk9alCqgEsNihXwqEE5v/1GrH3jhqwB5RZwaIJKC9g3QS2/dQ1qFTCvQbUC1jWo57fdiJKvvZElgAUA0yaIAoBpE0jyW9ZAUgHTGogqYFkDWX67jSj97ilZAVgIMGuCKASYNYE0v1UN5L+EalQDcQWsaiDPb7MRW74AThYAbgCYNEFsAJg0QUt++S1H5NH2c8QGNYhNAIMatOXX34itd2EgbQA3AtSbIDYC1JugNb/2Rmy/Q5ByDWIzQLkG7fl1N2LPrVBIE8AdANUmiB0A1Sboya+5Eftu06VYg9gFUKxBX369jdh7eyrSAnAnQK0JYidArQl682ttxP575SnVIHYDlGrQn19nI47cI440ADwAUGmCOABQaYKR/BMAB6g04Q80IE7ARwaQBoAn4CMDggZg5O+BCZgAjfxDr8cTgAbA/zWbADhA6Ray/3QDSAfAE/BxAUEH0P9yOAFwgE7+gZfDCTg8AP55wQTAAaQF4An4qAC1O5r3fmwWtAC9r8cTAAdo5e9+OZwANAB+EcsETADpAXgCPiYg6AH6Xg4nAA541QN8r2dLhF7+ztfjCUAD4FdWTwAcQJoAnoAJ6AAETUDP6/EEwAGa+bteDicADVD+VYGXZgD8+4YTAAeQLoAnwArA0sc1A4LswNKJ2f5yKAOcGx5oAojS/WoEOLc9Uh/Ab48kG4DkqJfmhyoDeHkowQBxeaioDS0Av+oaDACSZxW7HqwIuD36JwTAt0cTBLB+uD6g/pN3d6OlfrHF10YAtT2l+gljbcBmtgZ3wOaA1avA1QHbBdqA0Hq8mrj15bAGiNsFtf8llQGJw7WvGAHsTkB1J7YCykdL3nv9tbxGFcCpJeQI0FvTB8hcHVe+ZYUmIKbXlNuwLX/xWNmGDh3qHkD2lbX4Gq4IyC/zAXB+GakBSkd6Kazrc7cBijM1OABiaV2hdFqAyrUI+VPQBsgPtcpx8vI2QP6J1FZmF7a9HmcB1eeRPQVKgFhbmW1DHYDgKANLV9F9AgqnQAVgvbZ2EJasJUOAw+Ilfk8fQthHIb36pQGQaaTosbpwCPFGSp+CcQBLl5MRQL7eBsDy9clTMAxoOMDo+uQBmmZ5MAC0rB8+QGp9S/5kGw4CuA1A6oC2/KlT0ALYv+PU/JlPGHsKQ/xr7E/iEKDjOqDdKRgCcDuAhgBbfnv+3ZMY+quYewA0Atgsjj2ATRvyAKDz+4JhAHCvj32AkYPcr+3Lv2nDNsDdWu4F0MCzCP1LVzHQR8/9S1ex+jSPG5euzl7sB5z6ASeNE7CuZGxd+mtl//2UntYnsn/pSP7b8+DmlafulXfx/jxi+9KgcQLe/7bqaaTlFLT9AEwiQv9OCgon4Gnpgs6d9KqR/00wtJNnzJgx49PHv9wr2HW7XkTuAAAAAElFTkSuQmCC" />
              </defs>
            </svg>

          </div>
        </div>
      </div>

    </main>
  )
}
