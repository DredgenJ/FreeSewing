export default function (part) {
  let { options, points, Path, paths, Snippet, snippets, complete, sa, paperless, macro, store } =
    part.shorthand()

  if( false == options.separateWaistband ) {
  paths.waistFoldBack = new Path()
  .move(points.bWaistSideHem)
  .line(options.separateWaistband ? points.bWaistBackSeam : points.bWaistBackHem)
  .line(options.separateWaistband ? points.bWaistBackSeam : points.bWaistBackOverlapHem)
    .attr('class', 'fabric stroke-sm')
  paths.waistFoldFront = new Path()
  .move(points.fWaistSideHem)
  .line(points.fWaistFrontOverlapHem)
    .attr('class', 'fabric stroke-sm')
  }

  paths.frontFold = paths.front.offset(-1 * store.get('hem')).attr('class', 'fabric stroke-sm')
  paths.legFold = paths.leg.offset(-1 * store.get('hem')).attr('class', 'fabric stroke-sm')
  paths.backFold = paths.back.offset(-1 * store.get('hem')).attr('class', 'fabric stroke-sm')

  paths.seam.setRender(true)

  // Complete?
  if (complete) {
    points.title = points.fWaistFront.shift(270, 400)
    macro('title', {
      nr: 1,
      at: points.title,
      title: 'pants',
    })

    points.logo = points.title.shift(270, 75)

    snippets.logo = new Snippet('logo', points.logo)

    macro('scalebox', { at: points.mHip.shift(-90, 70) })

    if (sa) paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
  }

  if( options.frontPocket ) {paths.frontPocket.setRender( true )}
  if( options.backPocket ) {paths.backPocket.setRender( true )}
 
  // Paperless?
  if (paperless) {
    let fWaistSide = (options.separateWaistband ? points.fWaistSideSeam : points.fWaistSide)
    let bWaistSide = (options.separateWaistband ? points.bWaistSideSeam : points.bWaistSide)
    macro('hd', {
      from: fWaistSide,
      to: points.mWaist1,
      y: fWaistSide.y,
    })
    macro('hd', {
      from: points.fWaistFrontOverlap,
      to: points.mWaist1,
      y: fWaistSide.y - sa - 15,
    })
    macro('hd', {
      from: points.mWaist,
      to: bWaistSide,
      y: bWaistSide.y,
    })
    macro('hd', {
      from: points.mWaist1,
      to: options.separateWaistband ? points.bWaistBackSeam : points.bWaistBack,
      y: bWaistSide.y - sa - 15,
    })
    macro('hd', {
      from: points.mWaist1,
      to: options.separateWaistband ? points.bWaistBackSeam : points.bWaistBackOverlap,
      y: bWaistSide.y - sa - 30,
    })
    macro('vd', {
      from: points.mWaist1,
      to: points.mHip,
      x: points.mWaist.x,
    })
    macro('vd', {
      from: bWaistSide,
      to: options.separateWaistband ? points.bWaistBackSeam : points.bWaistBack,
      x: bWaistSide.x + 15,
    })
    macro('vd', {
      from: options.separateWaistband ? points.bWaistBackSeam : points.bWaistBackOverlap,
      to: points.bLegBackOverlap,
      x: points.bLegBackOverlap.x - 30,
    })
    if( false == options.separateWaistband ) {
      macro('vd', {
        from: points.fWaistSide,
        to: points.fWaistSideHem,
        x: points.fWaistSide.x +10,
      })
    }

    if (options.frontPocket) {
      macro('vd', {
        from: fWaistSide,
        to: points.frontPocketTop,
        x: points.frontPocketTop.x,
      })
      macro('vd', {
        from: fWaistSide,
        to: points.frontPocketBottom,
        x: points.frontPocketBottom.x,
      })
      macro('hd', {
        from: points.frontPocketTop,
        to: fWaistSide,
        y: points.frontPocketTop.y,
      })
      macro('hd', {
        from: points.frontPocketBottom,
        to: fWaistSide,
        y: points.frontPocketBottom.y,
      })
    }
    if (options.backPocket) {
      macro('vd', {
        from: bWaistSide,
        to: points.backPocketLeft,
        x: points.backPocketLeft.x,
      })
      macro('vd', {
        from: bWaistSide,
        to: points.backPocketRight,
        x: points.backPocketRight.x,
      })
      macro('hd', {
        from: bWaistSide,
        to: points.backPocketLeft,
        y: points.backPocketLeft.y,
      })
      macro('hd', {
        from: bWaistSide,
        to: points.backPocketRight,
        y: points.backPocketRight.y,
      })
    }
  }
  part.render = (options.showMini == false)

  return part
}
