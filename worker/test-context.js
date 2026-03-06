import { loadSites } from "./sites-loader.js"
import { loadProductBriefing } from "./context-loader.js"

async function run() {

    const config = await loadSites()

    for (const site of config.sites) {

        const briefing = await loadProductBriefing(
            site.product_briefing
        )

        const context = {

            siteId: site.id,
            domain: site.domain,
            repo: site.repo,
            mainCTA: site.main_cta_selector,
            productBriefing: briefing

        }

        console.log("CONTEXTO DO SITE:")
        console.log(context)

    }

}

run()