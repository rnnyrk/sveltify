<script lang="ts">
  export let width: number;
  export let height: number;
</script>

<svg
  {width}
  {height}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
>
  <circle
    cx="26"
    cy="50"
    r="6"
  >
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin=".1"
    />
  </circle>
  <circle
    cx="46"
    cy="50"
    r="6"
  >
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin=".2"
    />
  </circle>
  <circle
    cx="66"
    cy="50"
    r="6"
  >
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin=".3"
    />
  </circle>
</svg>
