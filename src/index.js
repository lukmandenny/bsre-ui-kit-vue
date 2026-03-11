// 1. Import Komponen
import BaseButton from './atoms/BaseButton.vue';
import BaseInput from './atoms/BaseInput.vue';
import BaseCheckbox from './atoms/BaseCheckbox.vue';
import BaseRadio from './atoms/BaseRadio.vue';
import BaseSelect from './atoms/BaseSelect.vue';
import BaseSwitch from './atoms/BaseSwitch.vue';
import BaseTextarea from './atoms/BaseTextarea.vue';
import BaseBadge from './atoms/BaseBadge.vue';
import BaseAvatar from './atoms/BaseAvatar.vue';
import BaseSpinner from './atoms/BaseSpinner.vue';
import BaseIcon from './atoms/BaseIcon.vue';
import BaseDivider from './atoms/BaseDivider.vue';
import BaseSkeleton from './atoms/BaseSkeleton.vue';
import BaseCard from './molecules/BaseCard.vue';

// 2. Import CSS (Wajib agar Tailwind terbawa)
import './assets/main.css';

// 3. Kumpulkan komponen dalam satu objek (untuk looping installer)
const components = {
  BaseButton,
  BaseInput,
  BaseCheckbox,
  BaseRadio,
  BaseSelect,
  BaseSwitch,
  BaseTextarea,
  BaseBadge,
  BaseAvatar,
  BaseSpinner,
  BaseIcon,
  BaseDivider,
  BaseSkeleton,
  BaseCard,
};

// 4. Export Satuan (Named Export)
// Memungkinkan user import spesifik: import { BaseButton } from 'bsre-ui-kit'
export {
  BaseButton,
  BaseInput,
  BaseCheckbox,
  BaseRadio,
  BaseSelect,
  BaseSwitch,
  BaseTextarea,
  BaseBadge,
  BaseAvatar,
  BaseSpinner,
  BaseIcon,
  BaseDivider,
  BaseSkeleton,
  BaseCard,
};

// 5. Export Plugin (Default Export)
// Memungkinkan user install global: app.use(BsreUiKit)
export default {
  install: (app) => {
    // Loop semua komponen dan daftarkan ke Vue
    for (const prop in components) {
      app.component(prop, components[prop]);
    }
  },
};
