import React, { useEffect, useState, Fragment } from 'react'
import { CardMedia, Card, CardContent, Typography, Slide, Collapse, Fade, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { HoverTextAnimation, SelectedTextStyled } from 'root/constants/commonStyled'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import RainEffect from 'root/components/commons/effects/rain'

interface MapViewProps {
  data: any
}

const loremText = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
, by injected humour, or randomised words which don't look even slightly believable
. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition
, injected humour, or non-characteristic words etc.`

interface ImageData {
  name: string,
  link: string,
  minTime: number,
  maxTime: number,
  time: string,
  content: string,
  title: string,
  imageTitle: string,
  isRain: Boolean
}
const useStyles = makeStyles((theme) => {
  return createStyles({
    historycontent: {
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    cover: {
      width: '500px',
      height: '823px'
    },
    coverMinisize: {
      width: '200px',
      height: '330px'
    },
    centerText: {
      textAlign: 'center'
    },
    miniHeader: {
      fontSize: '11px',
      textAlign: 'center'
    },
    contentText: {
      paddingTop: '20px',
      cursor: 'text'
    },
    content: {
      width: 'calc(97vw - 520px)',
    },
    miniContent: {
      width: 'calc(97vw - 210px)',
    },
    marginTop: {
      top: '150px'
    }
  })
}
);

const replaceBreakLine = (string: string) => {
  const newString = string.replace(/\n/g, '<br />')
  const listStrings = newString.split('<br />')
  listStrings.forEach((str) => {

  })
  return (
    <h5>
      {listStrings.map((str, index: number) => {
        return (<Fragment key={`break-line-key-${index}`}>{str}<br /></Fragment>)
      })}
    </h5>
  )
}

const MapView = (props: MapViewProps) => {
  const { data } = props
  const [imagesList, setImageList] = useState<any[]>([])
  useEffect(() => {
    let images: any[] = []
    Object.keys(data).forEach((key) => {
      let _maps = data[key].maps || {}
      Object.keys(_maps).forEach((key2) => {
        if (_maps[key2].link) {
          images.push(_maps[key2])
        }
      });
    })
    setImageList(images)
  }, [data])
  const matches = useMediaQuery('(max-width:450px)')
  const classes = useStyles()
  return (
    <>
      {imagesList.map((image: ImageData, index: number) => {
        return (
          <Fragment key={`map-view-${image.name}-${index}`}>
            <Card className={classes.historycontent}>
              <div className={classes.details}>
                <CardContent className={matches ? classes.miniContent : classes.content}>
                  <Slide direction='down' in={true} timeout={800} mountOnEnter unmountOnExit>
                    <Typography className={matches ? classes.miniHeader : classes.centerText} component="h5" variant="h5">
                      <HoverTextAnimation><span className='content'>{image.title || image.time}</span></HoverTextAnimation>
                    </Typography>
                  </Slide>
                  <Fade timeout={1200} in={true} mountOnEnter unmountOnExit>
                    <Collapse in={true} mountOnEnter unmountOnExit>
                      <Typography className={classes.contentText} variant="subtitle1" color="textSecondary">
                        <SelectedTextStyled>{replaceBreakLine(image.content || loremText)}</SelectedTextStyled>
                      </Typography>
                    </Collapse>
                  </Fade>
                </CardContent>
              </div>
            </Card>
            <TransformWrapper>
              <TransformComponent>
                <Card className={matches ? classes.marginTop : ''}>
                  <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
                    <CardMedia
                      className={matches ? classes.coverMinisize : classes.cover}
                      image={image.link}
                      title={image.imageTitle}
                    />
                  </Fade>
                </Card>
              </TransformComponent>
            </TransformWrapper>
            {image.isRain && <RainEffect />}
          </Fragment>
        )
      }
      )}
    </>
  )
}

export default MapView