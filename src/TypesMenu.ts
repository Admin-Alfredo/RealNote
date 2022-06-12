import { createMenu } from "./components/ContextMenu/menu.class"
import { ItemsMenuInterface, MenuInterface } from './components/ContextMenu/menu.interface'
import { ModalState } from "./components/Modal/modal.class"
import { globalState } from './store/index'


const listItemsSelectMenu: Array<ItemsMenuInterface> = [
  {

    children: [
      {
        title: 'negrito',
        icon: 'bold',
        click() {
          document.execCommand('Bold', true, '')
        }
      },
      {
        title: 'italico',
        icon: 'italic',
        click() {
          document.execCommand('italic', true, '')
        }
      },
      {
        title: 'sublinhado',
        icon: 'underline',
        click() {
          document.execCommand('underline', true, '')
        }
      },
      {
        title: 'adicionar link',
        icon: 'link',
        click(event: MouseEvent, payload: ModalState) {
          payload.isOpen = true
        }
      }
    ],
  },
  {
    icon: 'copy',
    label: 'copiar',
    click(e: PointerEvent) {
      document.execCommand('copy', false, '')
    },
  },
  {
    icon: 'paste',
    label: 'colar',
    click(e: PointerEvent) {
      document.execCommand('paste', false, '')
    },
  },
  {
    icon: 'cut',
    label: 'cortar',
    click(e: PointerEvent) {
      document.execCommand('cut', false, '')
    },
  },
  {
    icon: 'font',
    label: 'Tamanho da fonte',
    submenu: createMenu('submenu_tamaho_fonte', [
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      }, {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: '10pt',
        click() {

        }
      },
      {
        label: 'personalizar'
      }
    ]),
  },
  {
    icon: 'align-center',
    label: 'Aliamento',
    submenu: createMenu('submenu_aliamento', [
      {
        label: 'centro',
        click() {
          document.execCommand('justifyCenter', true, '')
        }
      },
      {
        label: 'direita',
        click() {
          document.execCommand('justifyRight', true, '')
        }
      },
      {
        label: 'esquerda',
        click() {
          document.execCommand('justifyLeft', true, '')
        }
      }
    ]),
  }
]
export const selectMenu: MenuInterface = createMenu('select_menu', listItemsSelectMenu)


export const contextMenu: MenuInterface = createMenu('context_menu', [
  {
    children: [
      {
        title: 'salvar',
        icon: 'save'
      },
      {
        title: 'sair',
        icon: 'close'
      },
      {
        title: 'nova página',
        icon: 'file-medical',
        click() {
          globalState.docActived?.addPage()
        }
      }
    ]
  },

  { icon: 'image', label: "adiciodar imagen" },
  {
    icon: 'shapes',
    label: "adiciodar forma",
    submenu: createMenu('submenu_fomas', [
      {
        icon: 'square', label: 'quadrado', click() {
          alert("Quadrado")
        }
      },
      { icon: 'circle', label: 'circulo' },
      { icon: 'play', label: 'triángulo' },

    ])
  },
])


