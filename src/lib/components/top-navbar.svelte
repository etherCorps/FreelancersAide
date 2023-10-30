<script>
	import { PUBLIC_PROJECT_LOGO, PUBLIC_PROJECT_NAME } from '$env/static/public';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<div class="flex flex-col flex-1 bg-background">
	<header class="z-10 fixed w-full bg-background border-b border-border">
		<div class="px-4 mx-auto">
			<div class="flex items-center justify-between h-16">
				<div class="flex mr-auto">
					<div class="flex items-center flex-shrink-0 gap-x-2">
						<img class="block w-auto h-8" src={PUBLIC_PROJECT_LOGO} alt="" />
						<h2 class="hidden md:block font-bold text-xl">{PUBLIC_PROJECT_NAME}</h2>
					</div>
				</div>

				<div class="flex items-center justify-end space-x-6 sm:ml-5">
					<!--					<div class="relative">-->
					<!--						<button-->
					<!--							type="button"-->
					<!--							class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"-->
					<!--						>-->
					<!--							<svg-->
					<!--								xmlns="http://www.w3.org/2000/svg"-->
					<!--								fill="none"-->
					<!--								viewBox="0 0 24 24"-->
					<!--								stroke="currentColor"-->
					<!--								stroke-width="2"-->
					<!--							>-->
					<!--								<path-->
					<!--									stroke-linecap="round"-->
					<!--									stroke-linejoin="round"-->
					<!--									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"-->
					<!--								/>-->
					<!--							</svg>-->
					<!--						</button>-->
					<!--						<span-->
					<!--							class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"-->
					<!--						>-->
					<!--							2-->
					<!--						</span>-->
					<!--					</div>-->

					<!--					<div class="relative">-->
					<!--						<button-->
					<!--							type="button"-->
					<!--							class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"-->
					<!--						>-->
					<!--							<svg-->
					<!--								xmlns="http://www.w3.org/2000/svg"-->
					<!--								fill="none"-->
					<!--								viewBox="0 0 24 24"-->
					<!--								stroke="currentColor"-->
					<!--								stroke-width="2"-->
					<!--							>-->
					<!--								<path-->
					<!--									stroke-linecap="round"-->
					<!--									stroke-linejoin="round"-->
					<!--									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"-->
					<!--								/>-->
					<!--							</svg>-->
					<!--						</button>-->
					<!--						<span-->
					<!--							class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"-->
					<!--						>-->
					<!--							6-->
					<!--						</span>-->
					<!--					</div>-->
					<DropdownMenu.Root>
						<DropdownMenu.Trigger
							class="flex bg-secondary items-center max-w-xs rounded-full focus:outline-none"
						>
							<img
								class="object-cover w-8 h-8 bg-secondary rounded-full"
								src="https://api.dicebear.com/7.x/croodles/png?seed=Shivam"
								alt=""
							/>
							<span class="hidden ml-2 mr-3 text-sm font-medium md:block"> Jacob Jones </span>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="min-w-[12rem]">
							<DropdownMenu.Item>Profile</DropdownMenu.Item>
							<DropdownMenu.Item>Team</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.RadioGroup value={'light'}>
								<DropdownMenu.Label>Theme</DropdownMenu.Label>
								<DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
							</DropdownMenu.RadioGroup>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Sign Out</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
			</div>
		</div>
	</header>

	<div class="h-full">
		<div
			class="bg-background/10 w-[var(--radix-menubar-content-available-width)] max-w-md flex-grow flex-col gap-4 overflow-y-auto hidden mt-4 py-10 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r z-0"
		>
			<div class="space-y-4 py-4 flex flex-1 flex-col overflow-y-auto">
				<div class="px-3 py-2">
					<div class="flex flex-col gap-1">
						<a href="/">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Dashboard
							</button>
						</a>
						<a href="/team">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground shadow-sm h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/5 bg-secondary-foreground/5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
								Team
							</button
							>
						</a>
						<a href="/clients">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
								Clients
							</button>
						</a>
						<a href="/projects">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									/>
								</svg>
								Projects
							</button>
						</a>
					</div>
				</div>
				<div class="px-3 py-2">
					<h4 class="mb-2 px-4 text-lg font-semibold tracking-tight">Work</h4>
					<div class="flex flex-col gap-1">
						<a href="/time-records">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Time Tracking
							</button></a>
						<a href="/invoices">
							<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1 hover:bg-secondary-foreground/5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
									class="mr-2 h-4 w-4">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Payment History
							</button>
						</a>
					</div>
				</div>
			</div>
			<div class="space-y-4 px-3 py-2">
				<button class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start mb-1"
					id="time-tracker">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
						class="w-4 h-3 mr-2">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					Time Tracker
				</button>
			</div>
		</div>
		<div class="lg:pl-64 flex flex-col flex-1 h-full">
			<main class="flex-1 mt-8 w-full">
				<div class="2xl:w-10/12 mx-auto px-4 py-14 lg:px-8">
					<slot />
				</div>
			</main>
		</div>
	</div>
</div>
