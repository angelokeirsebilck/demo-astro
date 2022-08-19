<script>
import { useGraphqlQuery } from "@composables/useGraphqlQuery";
import { entryQuery } from "@graphql/entry.gql";
import { onMount } from "svelte";
import DefaultLayout from "@layouts/DefaultLayout.astro";

const title = "Test";
</script>

<div>
  svelte component {title}
  <slot name="layout" title="this does not {title}" />
</div>
