import { resolve } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const materialDesignIconsUpdatedPlugin: IconsaucePlugin = {
  prefix: 'miu',
  regex: {
    code: /(miu)(\/{1}[0-9a-z-]+){1,2}/gm,
    lib: /(([a-zA-Z_\-/]+\/)(filled|outline|round|sharp)[a-zA-Z_\-/]+\/ic_([0-9a-zA-Z_]+)_24px\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `miu/${path[3]}/${path[4].replace(/[_]+/g, '-')}`,
  path: `${resolve('node_modules', 'material-design-icons-updated')}/**/+(filled|outline|round|sharp)/**/*_24px.svg`,
}

export default materialDesignIconsUpdatedPlugin
module.exports = materialDesignIconsUpdatedPlugin
