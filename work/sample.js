const sampleMap = {
  // aaa--------------------------------------------------------
  aaa: [
    {
      key: "zidoukeisan",
      function: function () {
        console.log("aaa_zidoukeisan");
      },
    },
    {
      key: "customCheck",
      function: function () {
        console.log("aaa_customCheck");
      },
    },
  ],
  // bbb------------------------------------------------
  bbb: [
    {
      key: "zidoukeisan",
      function: function () {
        console.log("bbb_zidoukeisan");
      },
    },
    {
      key: "customCheck",
      function: function () {
        console.log("bbb_customCheck");
      },
    },
  ],
};
export function sample(tetsuduki, pKey) {
  sampleMap[tetsuduki].find((map) => map.key === pKey).function();
}

export const testMap = {
  aa: {
    function: function () {
      console.log("aa_function");
    },
  },
};
/**
git config --global user.name "Rudolphish"
git config --global user.email "rudi.rednose.wolf@gmail.com"
git config --global core.quotepath false
git config --global core.editor "code --wait"
 */
