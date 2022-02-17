import { dirname } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

export const materialDesignIconsUpdatedPlugin: IconsaucePlugin = {
  prefix: 'miu',
  regex: {
    code: /(miu)(\/{1}[0-9a-z-]+){1,2}/gm,
    lib: /(([a-zA-Z_\-/]+\/)(filled|outline|round|sharp)[a-zA-Z_\-/]+\/ic_([0-9a-zA-Z_]+)_24px\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `miu/${path[3]}/${path[4].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('material-design-icons-updated/package.json'))}/**/+(filled|outline|round|sharp)/**/*_24px.svg`,
}
