<script>
export default {
  data () {
    return {}
  },
  methods: {
    splitDateString (stringToSplit, separator) {
      const arrayOfStrings = stringToSplit.split(separator)
      console.log(arrayOfStrings)
      console.log(arrayOfStrings.length)
    }
  }
}
</script>
