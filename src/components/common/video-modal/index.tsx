import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

import { MuxVideo } from '~/components/primitives/mux-video'

import s from './video-modal.module.scss'

interface ModalProps {
  url: string
  poster?: string
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ url, poster, children }) => {
  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className={s.modalOverlay} />
        <Dialog.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault()
          }}
          onCloseAutoFocus={(e) => {
            e.preventDefault()
          }}
          className={s.modalContent}
        >
          <MuxVideo poster={poster} controls className={s.video} muxSrc={url} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export const Trigger = Dialog.Trigger

const Video = {
  Modal,
  Trigger
}

export default Video
