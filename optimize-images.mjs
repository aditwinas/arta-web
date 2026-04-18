import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASARKt5eyauDWufc1L8yPj_1Ap7WGiWrReFeRVSqo-mBeqfiUZSu0ryZkfsq29MPbtjRjXVRCoh-Y7giv37ZEC0vDwECH7QDwMOEiF7St-zjXvzZIE2933onL9vSMi-YFr-NbfwrOV7R46kRL0jkxOxWquW2JCRJiozhWlAZjPKdzsstiqPhIdvF2PKkjAPGeyCisryqXs8iXvgfr_7cIkt-75P_Z2mVa4IObku5G4JkBmV8mOw98Jdq7cgUY0c5nMmaD-RWEYOH9m',
    name: 'hero-graphic'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCQnmyfHWEmI2gNTQxTBjyRO3LjyeTrNhKCdmPt8gmNQd4j5ISaKiIlt_na8Z_us8uhPx1VNgi3i1LzMAUqy49u6YuQbmgEOX3oiW3m-SGhxIPQUbvtwMCE0P0FcnXqFDx1Ze450llO9pbWa08qKPyzNEV3GidQe5gzcLR_qvvpqoa1yYmG5ianRxDhrnOsAetpa0uWEevxQ7gE5ylX7oAcJzsuSr9N1gcbHlxNDLojE74rxk6TRUfLsZUpy_XbPqXS2I8OwCQmuCA',
    name: 'portfolio-fb'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdKyhVrxT9ZgFtlnQapZctuxi5QWBlCKELPKxHJvRzaZYHIgTe31uF75kAbfpgi8eH1SGQFfpIyZhD0hEnW8TcFbWPfEXK2kzuLvFUDEJZSZAVdfwokK72u0LawOZR5DW5l0u-KgnzubqYjt7VaiF5S9shfMFI9oR3xktLCmPZQbkrPx9DAwEQgCtnN7TxR_NDfQcmDm2ct2w_XT00AyxizDiPcT0Nhb2OXQUQGUbRAHKVmXoN9y4hxu88dmzrJLN8z0sWaORFeTm6',
    name: 'portfolio-photobox'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8KpuKV2T4-0Ea_PlSc_ScyZLR2873M9svuRAC3OSrDkBpM_YXFtM13xE175ZDY7isrRVVpL7NOqoR7dfPp21i5d1_afGPlVUaJKcEl4_N25AFF2hcGq7PCqoq4Rj7ozzWtg9g_wL2Ng9JFUHkwE5OJ7jX7lfoRiAS4PXgJTFctp1tU2VGyTT0W9FpnRoGylgZRokW0_-RJ_8xvoZs4A0r3K1TFOdVlq13CnRyu5EJ_UUIJjW-bbBnkswP4wgHA73cr6ocZHhuoLLZ',
    name: 'portfolio-dental'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPBdMi_-LDfS3CKSvdO_CYwtxQHItRz5A1CbALd4SXaOl5MBESnrjxp1aiWaJrQ4kQ6d78gOXeUME6-PCSFPW1QFLwtwHod-BwGK_M4XEVVMzVOzTE8stpeAeTxaAx8JQS3NfBCbz0siPE8w1gXudLRe_brtNgSkaV2qehMa9rIBa24Ym_2hgJOzlfhkKz2oHR-cvln9UpmHXsNkbhTzzOudzSIKoFLTR6kMRCgGoIggedOJsNfuxz9lMoLZtG6xU-rZ5lVvU5FyMN',
    name: 'portfolio-wellness'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATADpzLWepWzQhxtMqCAs-wBLinqZM1m0RSMRnTZ0E3gFfGL_KrM8msdj7a_G3JkGw182D7vZKZLYJGCezrmnYEuVPfdY2dlODuZvoMw7WQfA-l4DuRzepBnNdbtGfIuSSvAQJWGc3TFTJTwHJmX2OZfC2vBlPzMNqTuWwkAnOqnLFD6wNLxmvoKMz1DZKi9EKMrM-SB8i_TEW8Inwg9VSZLqwTLkx64AfDFWKC27gwuPl9wSKWAKKEQIUg-BVoZl3hgLkYTPyJ-_r',
    name: 'portfolio-compound'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkc99q47DHnm99qSS9lDRbU0VEwCdzCiMh4fW1FpTIYIzKiq6EdyClxAEON1BFXxk67aHNIYJzEjQ0pvLkrTwgo321J0AYyyxy-LySSLJa7FacKMklmrxrolJAF4T3VqRjN31Phua_y_JEGiuplyXhK6U39kKQuRYtzc8tBsU--EYz_2ntdOklqeCpyuYk78gBO5cB4oef_3dB_hfOPxhNOip47ihNnw1lzq4lkjoQq3WOSqjYyewn84OwqkcQHkrgbA_sicR6XZ4o',
    name: 'team-sultoni'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8aTkSC_HSVjGL-f7XlqRJd8d0oQpXZnkIeQCbrqWw-GtEsqJJwBSjmyTtuEUrMo3uZrl2JYgxHdZ5xXGPtIFYS2oAggyqIOktzKm6OoUjqOqJoE0XCLwa1PO3YaJCTwXDyaFg25vhz_IMjmg1YhkpAQS7NF8yD_QI-gniqcz0xqU_rjFCiN4xbd_Mgo5cSME5xHAKJkx5UtQK4-BqTtpZc6BzYxtODzgLNpvA0l_TAn5G4P97hTktC4pPrj_fuxTLA0aTm2ZwRB8H',
    name: 'team-agyl'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4k7GKKj0X4RU9pR3VVsfQfdK0lwP3Rr0YOK0tquOu7tUbZUsKqix4pEQT7Q35-PWcwDTnjlLZSVMvxxowxCjKwMlN_4UIXh3cQW-3A0rjFYbMh1mfUETYS0cXgqLwbOMf7LFP0ft9uZNpI_wkukEwGyZWIbSmC3ziQA8Yfp7ex1LHGKSDU-RO8YaHz-kLeN7BsFroSehlr-r9dgq2RU3oR7eOlfYOASb4CVgK3xPTy67BIEvZj74_yEUYXoPSlUCn6ZjiqWwAJPFd',
    name: 'team-safora'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5EHK4aXl4rEiBLFNfODs0NO9MIQVFO8wwW0gHhnrDHsAXYwlkV-HYP58oHkZgGvEPah-xMML1ZZau86YjeiEjCu8Q6DaghtZz6G2XTHskoT_CjWTIfKgwkUQoHU5PaWln-JTSHZEAH5TQTblj5G_e9lgOYqPcWSsdOl2GCse8rg3P4-zihBhL-1havMcGicTqnE2ZFEEVs4aY09c_oih2dRYBorRm7mwwb-svJf_5T_mZbiihMm-B5GjsziMfUA42g6jMv3Suv5mb',
    name: 'team-ricky'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQOBHnTOJAfqI7rc1XKLrOp5RzBHxOtnMT43wnxRT2qwVfJVSRNKComq1Yov82mBIFTQdw52RvB3S0wdo_Z2nmuNdhwqaePjT8pidgNAmOAKn23R8poDBvzsdKoEXIKqLFiZVsjlECBcrUIWrwHyl-ScJE8lNe0rXJn1zZdyNDHtdQG7FvoStMWYshep8HEVcaWnwkJUVUUxXJpjV7bGsa4dQgmvzAiMAfPuxG56q_VTTCh7cyWqQRnAIvnz1ioZdCUCZha-L3C2K9',
    name: 'team-adit'
  }
];

const downloadImage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
};

const optimizeImages = async () => {
  const dir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const img of images) {
    console.log(`Processing ${img.name}...`);
    try {
      const buffer = await downloadImage(img.url);
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(path.join(dir, `${img.name}.webp`));
      console.log(`Saved ${img.name}.webp`);
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err.message);
    }
  }
};

optimizeImages();
